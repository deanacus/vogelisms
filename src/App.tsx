import React from "react";
import "./styles.css";
import { Quote } from './Components/Quote';
import { useQuote } from './Hooks/useQuote';
import { quotes } from './Data/index';

export const App = () => {
  const quote = useQuote(quotes);
  return (
    <div>
      <h1>Vogelisms</h1>
      <Quote>{quote}</Quote>
    </div>
  )
}
