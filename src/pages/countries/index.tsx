import { useEffect, useState } from "react";
import { CardComponent } from "../../components/cards";
import { SearchComponent } from "../../components/search";
import { api } from "../../services/api";
import { Countries } from "./styled";
import { CountriesProps } from "../../interfaces/countries";

export function CountriesPage() {
  const [allCountries, setAllCountries] = useState<CountriesProps[]>([]);
  const [searchData, setSearchData] = useState<string>('');

  const getCountries = async () => {
    try {
      const response = await api.get("/countries");
      setAllCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSearchData = (data: string) => {
    setSearchData(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <Countries>
      <div className="search">
        <SearchComponent onSendData={handleSearchData} />
      </div>
      <div className="banner">
        <img 
          src="https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Banner" 
        />
      </div>
      <section>
        {filteredCountries.map((country: CountriesProps) => (
          <CardComponent
            key={country.countryCode}
            name={country.name}
            code={country.countryCode}
          />
        ))}
      </section>
    </Countries>
  );
}
