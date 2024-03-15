import React from "react";
import LinkButton from "../components/LinkButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-dark scroll sticky top-0 text-white flex justify-between items-center px-4 py-6 md:px-20">
      <h1 onClick={() => navigate("/")} className="md:text-lg cursor-pointer">
        Crypto
        <span className=" cursor-pointer font-bold font-serif text-red">
          Nuts
        </span>
      </h1>
      <menu className="space-x-4 flex md:space-x-6 text-sm  md:text-lg">
        <LinkButton to="/" content="Dashboard" />
        <LinkButton to="/crypto" content="Cryptocurrencies" />
        <LinkButton to="/exchanges" content="Exchanges" />
      </menu>
    </header>
  );
};

export default Header;
