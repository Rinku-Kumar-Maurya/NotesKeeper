import React from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputForm from './InputForm';
import { useState } from 'react';


function App() {

  const [allNotes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prev => {
      return [...prev, note]
    });
  }

  function deleteNote(id) {
    setNotes(prev => {
      console.log(id);
      return (prev.filter((note) => note.id !== id))
    })
  }

  return (
    <div>
      <Header />
      <InputForm onAdd={addNote} />
      {
        allNotes.map(note => {
          return <Note id={note.key}
            key={note.key}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        })
      }
      <Footer />
    </div>
  );
}


export default App;