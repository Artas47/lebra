import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Articles from './pages/articles/articles';

function App() {
  return (
    <main style={{display: 'flex',height: '100vh'}}>
      <div style={{width: '80%', height: '100%'}}>
        <Header />
        <Articles />
      </div>
      <div style={{width: '20%', position: 'relative'}}>
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
