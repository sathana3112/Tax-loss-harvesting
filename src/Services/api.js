
import holdings from "../Data/Holdings.json";
import capital from "../Data/CapitalGains.json";

export const getHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdings);
    }, 700);
  });
};

export const getCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capital);
    }, 700);
  });
};