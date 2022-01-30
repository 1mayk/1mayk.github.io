// Buscando produtos dentro da API
const fetchProducts = async (id) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}