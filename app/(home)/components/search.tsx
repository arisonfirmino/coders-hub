import { Input } from "@/app/components/ui/input";

const Search = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <form className="px-5 md:px-0">
      <Input
        type="search"
        placeholder="Pesquise por um projeto..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </form>
  );
};

export default Search;
