import { Route, Routes } from "react-router-dom";
import { CountriesPage } from "../pages/countries";
import { DetailsPage } from "../pages/details";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/country/:code" element={<DetailsPage />} />
    </Routes>
  );
}