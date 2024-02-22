export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={event => onChange(event.target.value)} />
    </div>
  );
};
