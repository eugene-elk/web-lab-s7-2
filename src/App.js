import React from 'react';
import MiniInfo from './components/MiniInfo'
import BigInfo from './components/BigInfo'

function App() {
  return (
    <div>
        <div class="header">
            <h1>Погода сейчас</h1>
        </div>
        <BigInfo />
    </div>
  );
}

export default App;
