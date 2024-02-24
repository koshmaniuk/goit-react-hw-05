import css from './SearchForm.module.css';
const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.searchField.value;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input type="text" name="searchField" className={css.searchInput} />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
