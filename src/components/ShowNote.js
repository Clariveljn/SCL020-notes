
import React , {useState, useEffect }from 'react';
import editar from '../images/editar.png';
import eliminar from '../images/eliminar.png';
//import { Link } from 'react-router-dom';
import { collection, getDocs, doc, /* getDoc,*/updateDoc, deleteDoc} from "firebase/firestore";
import { db } from '../firebase/firebase';
import './ShowNote.css'
//import AddNote from '../routes/Notes';
//import { async } from '@firebase/util';


const ShowNote = () => {
  const [notes, setNotes] = useState( [] )
  const notesCollection = collection(db, "notes")

  //función para mostrar todos los docs
  const getNotes = async () => {
    const data = await getDocs(notesCollection)
    //console.log(data.docs)
    setNotes(
      data.docs.map ((doc) => ({...doc.data(), id:doc.id}))
    )
  console.log(notes)
  }

  //función para eliminar doc
  const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id)
  await deleteDoc(noteDoc)
  getNotes()
  alert("Nota Eliminada")
  }

  useEffect ( () => {
    getNotes()
    //eslint-disable-next-line
  }, [] ) 


//función para editar doc

 const EditNote =  (id,title,description) =>{

  console.log(id,title,description)

  document.querySelector('#titleUpdate').value = title
  document.querySelector('#descriptionUpdate').value = description
  document.querySelector('#btnUpdate').addEventListener('click', async () => { 

  let newTitle = document.querySelector('#titleUpdate').value
  let newDescription = document.querySelector('#descriptionUpdate').value

    const noteRef = doc(db, 'notes', id)
    await updateDoc (noteRef,{
      title: newTitle,
      description: newDescription,

    })
    alert ('archivo actualizado')
  })

} 

  return (
    <>
      <div className='showCards'>
        <div> 
          <input className='titleEdit' id='titleUpdate'/>
          <textarea  className='descriptionEdit' id='descriptionUpdate'/>
          <button id='btnUpdate'> Actualizar Nota </button>
        </div>

        {notes.map(doc => console.log(doc) || (
          <div key = {doc.id} className='cards' >
              <input placeholder= {doc.title} className="title" />
              <textarea placeholder= {doc.description} className="description"/>

              <div className='buttons'>
                <button className='edit' type="button" onClick={() => EditNote(doc.id,doc.title,doc.description)} key={doc.uid}><img className='imgBtn' src={editar} alt='editar'></img> </button>
                <button className='delete' type="button" onClick={() => deleteNote(doc.id)} key={doc.uid}><img className='imgBtn' src={eliminar} alt='eliminar'></img></button>
              </div>
          </div>
        ))}  
      </div>

    </>

  )};
           
        
export default ShowNote
