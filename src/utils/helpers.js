export const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

export const getCamperDetails = (campers, id) => {
  return campers.find((camper) => camper.id === id);
};

export const toggleFavorite = (favorites, camper) => {
  return favorites.some((fav) => fav.id === camper.id);
};
