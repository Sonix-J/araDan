import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";

const user = collection(db, "users");

export default async function addUser(data){
    try{
        const docRef = await addDoc(user,data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}