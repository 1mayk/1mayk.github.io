// Buscando na API
const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;

  try {
    const response = await fetch(url);
    const item = await response.json();
    return item;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}