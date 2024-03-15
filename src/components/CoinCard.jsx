import React from "react";

const CoinCard = ({ coin }) => {
  const { uuid, symbol, name, iconUrl } = coin;
  return (
    <div className="bg-red flex flex-1 px-4 gap-4 py-8 rounded-2xl">
      <div className="w-20 rounded-full">
        <img src={iconUrl} alt={name} className="h-[100%] rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>{name}</h1>
        <p className="bg-light text-xs px-2 rounded-md">{uuid}</p>
      </div>
    </div>
  );
};

export default CoinCard;
