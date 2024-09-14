import { useEffect, useState } from "react";
import { Details } from "./styled";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { BordersProps, CountryProps } from "../../interfaces/countries";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function DetailsPage() {
  const { code } = useParams<{ code: string }>();
  const [dataCountry, setDataCountry] = useState<CountryProps | null>(null);

  const getCountry = async () => {
    try {
      const response = await api.get(`/country/${code}`);
      setDataCountry(response.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    getCountry();
  }, [code]);

  if (!dataCountry) {
    return <p>Loading...</p>;
  }

  const flagUrl = typeof dataCountry.flag === 'string' ? dataCountry.flag : dataCountry.flag?.data.flag;

  return (
    <Details>
      <div className="card_details">
        <div className="flag">
          <img src={flagUrl} alt="Country flag" />
        </div>
        <p>Common name: <b>{dataCountry.borders?.commonName}</b></p>
        <p>Official name: <b>{dataCountry.borders?.officialName}</b></p>
        <p>Country code: <b>{dataCountry.borders?.countryCode}</b></p>
        <div className="borders">
          <p>Borders: {dataCountry.borders?.borders.map((border: BordersProps) => {
            return (
              <a href={`/country/${border.countryCode}`}>{border.commonName}, </a>
            );
          })}</p>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={dataCountry.population.data.populationCounts}
              margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis dataKey="value" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Details>
  );
}
