import { useState } from 'react';
import PasswordSettings from './components/PasswordSettings';
import PasswordDisplay from './components/PasswordDisplay';

function App() {
  const [length, setLength] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [password, setPassword] = useState('duhw746gjh8u');
  const buttonStyle = {
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};


  const generatePassword = () => {
    let chars = '';
    if (includeLetters) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';

    if (!chars) return setPassword('password');

    let result = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }
    setPassword(result);
  };

  return (
    <div className="app">
      <h2>Password Generator</h2>
      <PasswordSettings
        length={length}
        setLength={setLength}
        includeLetters={includeLetters}
        setIncludeLetters={setIncludeLetters}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        onGenerate={generatePassword}
      />
      <PasswordDisplay password={password} />
       <button onClick={generatePassword} style={buttonStyle}>Generate</button>
    </div>
  );
}

export default App;
