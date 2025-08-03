import CopyButton from './CopyButton';

export default function PasswordDisplay({ password }) {
  return (
    <div className="display">
      <input type="text" value={password} readOnly />
      <CopyButton text={password} />
    </div>
  );
}
