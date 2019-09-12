import React from 'react';
import Card from '../CardList/Card'

const appStyle = {
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
}

function App() {
  return (
    <div className="App" style={appStyle}>
        <Card></Card>
    </div>
  );
}

export default App;
