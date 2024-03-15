const API_URL = `https://coinranking1.p.rapidapi.com/`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a072fc390cmsh0ee3742b2e92f59p168573jsn43c84a5ddd05",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const getGlobalStats = async () => {
  const url = `${API_URL}stats?referenceCurrencyUuid=yhjMzLPhuIDl`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error();
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("Failed to get stats!");
  }
};

export const getCryptos = async () => {
  const url = `${API_URL}coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error();
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("Failed to get Coins!");
  }
};
