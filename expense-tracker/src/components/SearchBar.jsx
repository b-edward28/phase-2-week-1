function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="🔍 Search by name/description"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      />
  );
}
export default SearchBar;