import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];
const appliances = ['refrigerator', 'oven', 'microwave', 'toaster', 'blender', 'vacuum', 'dryer'];
const group=['onedirection','thesols','21savage','chayanne','joji'];

const allWords = [...words, ...appliances, ...group];

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hangman  words={allWords} fruitsList={words} appliancesList={appliances} groupList={group} />
    </div>
  );
}

export default App; 
