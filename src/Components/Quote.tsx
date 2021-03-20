import { FC } from 'react';

export const Quote: FC = ({ children }) => (
  <blockquote>
    <p>{children}</p>
    <cite>Scott Vogel</cite>
  </blockquote>
);
