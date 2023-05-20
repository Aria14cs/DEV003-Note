import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc,getDocs,doc, deleteDoc, updateDoc,query, orderBy  } from "firebase/firestore";
import {auth,db} from './config-fire'

export const googleAuth = (router)=>{ 
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user,'user')
    
    if(user.emailVerified){
       router.push('/Muro');
    }
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,'errormensaje')
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

{/*Para crear la NOTA*/}
export const note = async(nota)=>{
  try {
    const docRef = await addDoc(collection(db, "notas"), {
        contenido: nota,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

{/*Para la leer la nota*/}
 export const leerNote=async()=>{
const querySnapshot = await getDocs(collection(db, "notas"));
const note=[];
querySnapshot.forEach((doc) => {
  note.push({...doc.data(),id:doc.id});
});
  return note;
 }
 
export const getNote = (id) => {
  // Accediendo a la colección 'notas' y buscando la nota//
  return db.collection("notas").doc(id).get()
    .then((doc) => {
      // Si se encuentra el documento, se devuelve un objeto con  ID, contenido
      return {
        id: doc.id,
        contenido: doc.data().contenido
      };
    })
    .catch((error) => {
      // Si ocurre un error,mensaje en la consola
      console.log('Error')
      throw new Error(`Error al obtener la nota con id ${id}: ${error}` );
    })
  }
 {/*Funcion para Eliminar Note*/}
 export const eliminarNote = (id) => {
  // console.log("=>", id)
  deleteDoc(doc(db, 'notas', id));
};

 {/*Funcion para actualizar  Note*/}
 export const updateNotas = (id, newContenido) => {
  return db.collection("notas").doc(id).update({
    contenido: newContenido
  });
}



//  {/*Funcion para ORNDENAR Note*/}
// export const ordenar =()=>{
//  const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));
// }


