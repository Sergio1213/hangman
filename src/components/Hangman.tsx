import { useState } from 'react';

interface HangmanProps {
  words: string[];
  // Puedes agregar las listas como propiedades para que sea más flexible y reutilizable
  fruitsList: string[];
  appliancesList: string[];
  groupList: string[];
}

const Hangman = ({ words, fruitsList, appliancesList,groupList }: HangmanProps) => {
  const [selectedWord, setSelectedWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  // Función para determinar de qué lista proviene la palabra seleccionada
  const getHint = () => {
    if (fruitsList.includes(selectedWord)) {
      return 'the word is a friut';
    } else if (appliancesList.includes(selectedWord)) {
      return 'the word is an electronic';
    } else if(groupList.includes(selectedWord)){
       return 'the word is a musical band';
    }
    return ''; // Si la palabra no pertenece a ninguna lista
  };

  const displayWord = selectedWord.split('').map((letter, index) => {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return '_';
    }
  });

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setErrorCount(0);
  };

  return (
    <div>
      <p>{displayWord.join(' ')}</p>
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
      {(displayWord.join('') === selectedWord || errorCount > 5) && (
        <button onClick={restartGame}>Select New Word</button>
      )}
      <p>number of errors: {errorCount}</p>
      {/* Muestra la pista */}
      <p>Clue: {getHint()}</p>
      {displayWord.join('') === selectedWord && (
        <p>¡You won!</p>
      )}
    </div>
  );
};

export default Hangman;
