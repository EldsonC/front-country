import { SearchIcon } from "../../assets/icons/search";
import { Search } from "./styled";

interface SearchProps {
  onSendData: (data: string) => void;
}

export function SearchComponent({ onSendData }: SearchProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSendData(event.target.value);
  }

  return (
    <Search>
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Search a country"
        onChange={handleChange}
      />
    </Search>
  );
}