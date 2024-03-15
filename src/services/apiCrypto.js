const API_URL = `https://coinranking1.p.rapidapi.com/`;

export const getGlobalStats = async () => {
  const url = `${API_URL}stats?referenceCurrencyUuid=yhjMzLPhuIDl`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a072fc390cmsh0ee3742b2e92f59p168573jsn43c84a5ddd05",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error();
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("Failed to get stats!");
  }
};
