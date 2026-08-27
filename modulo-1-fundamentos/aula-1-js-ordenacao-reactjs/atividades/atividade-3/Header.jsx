//src/components/Header.jsx
import React from 'react';

export function Header({ title }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>Ecossistema ByteClass | Prática Modular em React</p>
    </header>
  );
}