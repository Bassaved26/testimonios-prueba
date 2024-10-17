
import './App.css';
//IMportando componente por nombre usando {} y la palara reservada "export" al lado del componente
import  Testimonios  from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
      <h1>Here is what our students say about freeCodeCamp:</h1>
      <Testimonios 
      /* Enviando al componente los props(argumentos o propiedades) */
      nombre='Sarah Chima' 
      pais='Nigeria'
      /* Personalizar la imagen */
      imagen='Sarah3'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='<b>freeCodeCamp</b> was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company' />
      <Testimonios 
      /* Enviando al componente los props(argumentos o propiedades) */
      nombre='Emma Bostian' 
      pais='Suecia'
      /* Personalizar la imagen */
      imagen='Emma2'
      cargo='Ingeniero de Software'
      empresa='Spotify'
      testimonio='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
      <Testimonios 
      /* Enviando al componente los props(argumentos o propiedades) */
      nombre='Shawn Wang' 
      pais='Singapur'
      /* Personalizar la imagen */
      imagen='Shawn1'
      cargo='Ingeniera de Software'
      empresa='Amazon'
      testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />

      </div>
    </div>
  );
};

export default App; 
