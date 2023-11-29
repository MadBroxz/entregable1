// import { useState } from "react";
// import './App.css'
// import QuoteBox from './components/QuoteBox';
// import quotes from "./db/quotes.json"
// import { getRandomPhrase } from './utils/random';

// const bgs = ["bg1", "bg2", "bg3", "bg4"];
// const planets = ["Planet1", "Planet2", "Planet3", "Planet4"];

// function App() {
  
//   const [quote, setQuote] = useState(getRandomPhrase(quotes));
//   const [currentBg, setCurrentBg] = useState(getRandomPhrase(bgs))
//   const [currentPlanet, setCurrentPlanet] = useState(getRandomPhrase(planets));


//   const handleChangeQuote = () => {
//     setQuote(getRandomPhrase(quotes));
//     setCurrentBg(getRandomPhrase(bgs));
//     setCurrentPlanet(getRandomPhrase(planets));
//   }

//   return (
//     <main className={`App ${currentBg}`}> 
//       <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} currentPlanet={currentPlanet} />
//     </main>
//   )
// }

// export default App;

import { useState } from "react";
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from "./db/quotes.json";
import { getRandomPhrase } from './utils/random';

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];
const planets = ["Planet1", "Planet2", "Planet3", "Planet4"];

function App() {
  const [quote, setQuote] = useState(getRandomPhrase(quotes));
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleChangeQuote = () => {
    setQuote(getRandomPhrase(quotes));
    setCurrentIdx((prevIdx) => (prevIdx + 1) % backgrounds.length);
  };

  return (
    <main className={`App ${backgrounds[currentIdx]}`}>
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} currentPlanet={planets[currentIdx]} />
    </main>
  );
}

export default App;
