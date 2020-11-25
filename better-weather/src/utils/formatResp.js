export const formatResp = (resp) => {
  let forecast = [];
  const loc = {};
  Object.keys(resp).forEach((key) => {
    if (key === "location") {
      loc["name"] = resp[key]["name"];
      loc["region"] = resp[key]["region"];
      loc["country"] = resp[key]["country"];
    }
    if (key === "forecast") {
      forecast = resp[key]["forecastday"];
    }
    if (key === "current") {
      return;
    }
  });
  forecast.forEach((day) => {
    delete day.hour;
  });
  return [loc, forecast];
};
