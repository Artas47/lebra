import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Articles from './pages/articles/articles';


function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '80%'}}>
      <Header />
        <Articles />
      </div>
      <div style={{width: '20%'}}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
