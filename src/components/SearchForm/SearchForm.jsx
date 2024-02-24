import css from './SearchForm.module.css';
const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.searchField.value;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchField" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
