import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];
const appliances = ['refrigerator', 'oven', 'microwave', 'toaster', 'blender', 'vacuum', 'dryer'];

const allWords = [...words, ...appliances];

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hangman words={allWords} fruitsList={words} appliancesList={appliances} />
    </div>
  );
}

export default App;