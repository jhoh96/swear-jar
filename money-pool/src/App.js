import "./App.css";
import Instance from './pages/Instance.jsx'

function App() {
  return (
    <div className="App">
      {/* <h1>Money Pool/Swear Jar</h1>
      <div className='input-form'>
        <input type="text" name="custom" placeHolder="custom" />
        <input type="text" name="note" placeHolder="note" />
        <input type="text" name="amount" placeHolder="$ amount" />
        <button>Submit</button>
      </div> */}
      <Instance/>
    </div>
  );
}

export default App;
