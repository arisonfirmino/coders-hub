const Search = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <form>
      <input
        type="search"
        placeholder="Pesquise por um projeto..."
        onChange={(event) => onSearch(event.target.value)}
        className="w-full rounded-xl border border-solid border-gray-400 bg-transparent px-5 py-2.5 outline-none focus:ring-1 focus:ring-white"
      />
    </form>
  );
};

export default Search;
