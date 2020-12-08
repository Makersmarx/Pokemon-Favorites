import React from 'react';
import data from './data';
import List from './components/List';
import './App.scss';

const App = () => {
  return (
    <div>
      <header>
        <h1>My Top 10 Favorite Pokemon</h1>
      </header>
      <main>
        <section className="container">
          <List pokemon={data} />
        </section>
      </main>
    </div>
  );
};

export default App;
