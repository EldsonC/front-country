export interface CountriesProps {
  countryCode: string,
  name: string
}

export interface CountryProps {
  borders: {
    commonName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: BordersProps[]
  },
  population: {
    data: DataPopulationProps,
  },
  flag: {
    data: {
      name: string;
      flag: string;
    }
  }

}

export interface DataPopulationProps {
  country: string,
  code: string,
  iso3: string,
  populationCounts: PopulationCountsProps[],
}

export interface PopulationCountsProps {
  year: number;
  value: number;
}

export interface BordersProps {
  commonName: string,
  officialName: string,
  countryCode: string,
  region: string,
}