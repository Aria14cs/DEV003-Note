import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc,getDocs } from "firebase/firestore";
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
{/*Para crear la leer la nota*/}
 export const leerNote=async()=>{
const querySnapshot = await getDocs(collection(db, "notas"));
const note=[];
querySnapshot.forEach((doc) => {
  note.push({...doc.data(),id:doc.id});
});
  return note;
 }

 {/*Funcion para editar*/}