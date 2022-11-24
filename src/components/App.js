/* eslint-disable no-const-assign */
import {useState} from 'react';
import '../styles/main.scss';

// Solución: se debe rellenar con las letras que aciertas. DATO ORIGINAL
// Letras falladas: se debe ir rellenando con las letras que fallas. DATO CALCULADO 
// Al fallar hay que pintar una parte del cuerpo del ahorcado. DATO ORIGINAL
// Al fallar tiene que contabilizar los fallos. DATO CALCULADO. Al empezar es 0 y cambia cuando hay una letra errónea. Máximo 11 errores 
// Si aciertas todas tiene que decirte que has ganado. DATO ORIGINAL
// Cada vez que escribes una letra nueva se borra la anterior. Quizá no te deje repetirla. DATO ORIGINAL
// Quizá haya un reset para volver a jugar. DATO ORIGINAL


//Al arrancar la página
//Recorrer la API y poner una palabra aleatoria
//Sass básico
//Un guion bajo por cada letra de la palabra
//Línea vertical que parpadea en escribe una letra

//Cuando la usuaria escriba
//En el apartado de Escribe una letra debe verse la letra que ha escrito
//Si la letra pertenece a la palabra, deberá aparecer en la solución
//Si la letra no pertenece a la palabra, deberá aparecer en letras falladas, sumar un error y pintar una parte del ahorcado
//Cuando haya un máximo de 11 errores, el juego debe avisarte de que has perdido
//Si se acierta la palabra, el juego debe avisarte de que has ganado
//Se podrá evitar que se repita la letra?


function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  //Variable que recoje los caracteres válidos
  let regexInputLetter = new RegExp ("^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]");
  //Función que incrementa los errores con el botón
  const handleClick = (ev) => {
    ev.prevent.Default();
    setNumberOfErrors(numberOfErrors += 1);
  }
  //Función que recoge los caracteres válidos que escribe la usuaria
  const handleInputLetter = (ev) => {
    if(ev.target.value === '' || regexInputLetter.test(ev.target.value)) {
      setLastLetter (ev.target.value);
      //REVISAR, NO NOS GUARDA LAS LETRAS
      setUserLetters([...userLetters], ev.target.value);
    }
  }

  //Pintar una raya por cada letra de la palabra de la solución
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      return <li key={index} className="letter"></li>
  });
  };
  // const renderAdalabers = () => {
  //   return adalabers.map((adalaber) => {
  //     return <li>{adalaber}</li>;
  //   });
  // };
  return (
    <div className="App">
      <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
            {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>  */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInputLetter}
            />
          </form>
        </section>
        <button onClick={handleClick}>Incrementar</button>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
    </div>
  );
}

export default App;
