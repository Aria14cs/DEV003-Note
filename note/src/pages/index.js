import { Inter } from "next/font/google";
import Login from "./Login.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Login></Login>
      </main>
    </>
  );
}
