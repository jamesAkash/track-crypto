import React from "react";

const CryptoCard = ({ coin }) => {
  const {
    iconUrl,
    symbol,
    color,
    name,
    marketCap,
    price,
    listedAt,
    rank,
    btcPrice,
  } = coin;
  return (
    <div
      style={{ color: `${color}` }}
      className="  transition  bg-dark px-16 py-14 basis-48"
    >
      <header className="bg-dark flex gap-8 justify-center items-center font-semibold">
        <div className="w-14 flex flex-col items-center">
          <img className="w-[100%]" src={iconUrl} alt={name} />
          <p className="text-xs">Rank #{rank}</p>
        </div>
        <div>
          <h1>{name}</h1>
          <h1>{symbol}</h1>
        </div>
      </header>
      <main className=" border-t-white border-t-2 mt-2 text-light">
        <p className="text-lg">
          Listed at <span className="text-green text-sm">{listedAt}</span>
        </p>
        <p className="text-lg">
          Price{" "}
          <span className="text-green text-sm">
            {Math.round(price * 1000) / 100}
          </span>
        </p>
        <p className="text-lg">
          Cap <span className="text-green text-sm">{marketCap}</span>
        </p>
      </main>
    </div>
  );
};

export default CryptoCard;
