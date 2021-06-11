import React, { useState } from "react";
import text from "./data";

function App() {
  const [amount, setAmount] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleClick = () => {
    if (amount > 9) {
      setParagraphs(text.slice(0, text.length - 1));
    } else if (amount < 1) {
      setParagraphs(text.slice(-1));
    } else {
      setParagraphs(text.slice(0, amount));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount("");
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
