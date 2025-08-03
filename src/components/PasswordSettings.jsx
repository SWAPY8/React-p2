export default function PasswordSettings({
  length,
  setLength,
  includeLetters,
  setIncludeLetters,
  includeNumbers,
  setIncludeNumbers,
  
}) {
  return (
    <div className="settings">
      <div>
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLetters}
            onChange={() => setIncludeLetters(!includeLetters)}
          />
          Include Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>
     
    </div>
    
  );
}
