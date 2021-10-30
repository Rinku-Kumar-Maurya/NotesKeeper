import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import InputForm from './InputForm';



function App() {
  return (
    <div>
      <Header />
      <InputForm />
      {
        notes.map(note => { return <Note key={note.key} title={note.title} content={note.content} /> })
      }
      <Footer />
    </div>
  );
}


export default App;