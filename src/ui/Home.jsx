import { useLoaderData, useNavigation } from "react-router-dom";
import { getGlobalStats } from "../services/apiCrypto";
import Row from "../components/Row";
import CoinCard from "../components/CoinCard";

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const {
    totalCoins,
    totalMarkets,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    btcDominance,
    newestCoins,
    bestCoins,
  } = data.data;
  console.log(Array.isArray(newestCoins));
  console.log(newestCoins.map((el) => el));
  if (navigation === "loading") return <h1>LOADING...</h1>;

  if (data?.data)
    return (
      <div className="px-4 h-screen py-8 max-w-3xl mx-auto">
        <h1 className="font-semibold text-lg md:text-3xl">Global Status</h1>
        <div>
          <Row value={totalCoins} name="Total Coins" />
          <Row value={totalMarkets} name="Total Markets" />
          <Row value={totalExchanges} name="Total Exchanges" />
          <Row value={totalMarketCap} name="Total Market Cap" />
          <Row value={totalMarkets} name="Total Markets" />
          <Row value={total24hVolume} name="Total 24h Volume" />
          <Row value={btcDominance} name="Bitcoin Dominance" />
        </div>
        <div className="mt-24">
          <h1 className="text-xl font-semibold">Latest Coins</h1>
          <section className="flex  gap-10 mt-4 flex-nowrap overflow-x-scroll">
            {newestCoins.map((el) => {
              return <CoinCard coin={el} key={el.uuid} />;
            })}
          </section>
        </div>

        <div className="mt-8">
          <h1 className="text-xl font-semibold">Best Coins</h1>
          <section className="flex  gap-10 mt-4 flex-nowrap overflow-x-scroll">
            {bestCoins.map((el) => {
              return <CoinCard coin={el} key={el.uuid} />;
            })}
          </section>
        </div>
      </div>
    );
};

export async function loader() {
  const stats = await getGlobalStats();
  return stats;
}

export default Home;
