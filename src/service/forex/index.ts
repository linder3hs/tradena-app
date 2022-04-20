const URL =
  'https://fcsapi.com/api-v3/forex/list?type=forex&symbol=EUR&access_key=0zU7OjMuN90zdMARtclc';

export const getSymbols = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data.response;
};
