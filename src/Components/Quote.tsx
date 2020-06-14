import React from 'react';

export const Quote: React.FC = ({ children }) => (
  <blockquote>
    <p>{children}</p>
    <cite>Scott Vogel</cite>
  </blockquote>
);
