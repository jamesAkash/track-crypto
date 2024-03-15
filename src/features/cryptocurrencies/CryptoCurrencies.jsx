import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../slice/coinSlice";
import CryptoCard from "../../components/CryptoCard";
const CryptoCurrencies = () => {
  const dispatch = useDispatch();
  const { coins, status, error } = useSelector((store) => store.coin.coins);
  console.log(coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  if (!coins)
    return (
      <h1 className="text-center mt-20 text-4xl text-green font-semibold">
        Loading...
      </h1>
    );

  return (
    <main className="mt-10">
      <h1 className="text-2xl mb-10 text-center font-bold text-red">
        Find all Active Crypto currencies
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {coins?.map((coin) => (
          <CryptoCard key={coin.uuid} coin={coin} />
        ))}
      </div>
    </main>
  );
};

export default memo(CryptoCurrencies);
