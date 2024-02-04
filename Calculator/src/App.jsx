import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CalculatorButton from "./Button";
import Display from "./components/display";
import ButtonContainer from "./components/buttonContainer"

function App() {
  return (
  
      <div className={styles.calculator}>
       <Display></Display>
       <ButtonContainer></ButtonContainer>
      </div>
   
  );
}

export default App;
