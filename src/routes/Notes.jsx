import Navbar from '../components/Navbar'
import ShowNote from '../components/ShowNote'
import { useState } from 'react';
import { collection, addDoc, doc, updateDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
import './notes.css'



const AddNote = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const notesCollection = collection(db, "notes")
    const add = async(e) => {
        e.preventDefault()
        await addDoc (notesCollection, {
            title:title,
            description:description})
        
    };

     

    return (
        <>
            <div className='notes'>
                <Navbar className="navbar" />
                <form onSubmit={add} className='newNote'>
                    <input className = "title" 
                    type="text" 
                    placeholder="Titulo"
                    value={title}
                    onChange={ e => setTitle(e.target.value)} >
                    </input>
                    <textarea className = "description" 
                    placeholder="Agregar Nota"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}>
                    </textarea>
                    <button onClick={AddNote} type = "submit" className ="addNote">AGREGAR NOTA</button>
                
                </form>

                <ShowNote />
            </div>

            
        </>
    )
}

 



export default AddNote;