export const success = (pos) => {
  const coords = pos.coords;
  return { latitude: coords.latitude, longitude: coords.longitude };
};

export const errors = (err) => {
  console.warn(`ERROR: ${err.code}: ${err.message}`);
};
