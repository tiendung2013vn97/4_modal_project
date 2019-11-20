import React from 'react';
import '../styles/App.css';
import UserManagement from './UserManagement'
function App() {
  return (
    <div className="App">
      <div style={{
        padding: '10px'
      }}>
        <UserManagement />

      </div>
    </div>
  );
}

export default App;
