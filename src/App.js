import "./styles.css";
import { useState, useEffect } from "react";

function getRandomQuote(Quotes) {
  return Quotes[Math.floor(Math.random() * Quotes.length)];
}

export default function App() {
  const [Quotes, setQuotes] = useState([]),
    [Quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(Quotes));
  }

  return (
    <main>
      <h1>Project 3 : quote generator</h1>

      <section>
        <div>
          <button onClick={getNewQuote}>New quote</button>
          <h3>
            <span> " </span>
            {Quote?.text}
          </h3>
          <i> - {Quote?.author} </i>
        </div>
      </section>
    </main>
  );
}
