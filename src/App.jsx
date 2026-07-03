import { useEffect, useState } from "react";
import { getCapitalGains, getHoldings } from "./Services/api";
import Loader from "./Components/Loader";
import SummaryCard from "./Components/SummaryCard";
import HoldingsTable from "./Components/HoldingsTable";
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [holdings, setHoldings] = useState([]);
  const [selected, setSelected] = useState([]);
  const [capital, setCapital] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const holdingsData = await getHoldings();
      const capitalData = await getCapitalGains();

      setHoldings(holdingsData);
      setCapital(capitalData.capitalGains);
      setLoading(false);
    }

    fetchData();
  }, []);

  const toggleRow = (coin) => {
    if (selected.includes(coin)) {
      setSelected(selected.filter((c) => c !== coin));
    } else {
      setSelected([...selected, coin]);
    }
  };

  const toggleAll = () => {
    if (selected.length === holdings.length) {
      setSelected([]);
    } else {
      setSelected(holdings.map((h) => h.coin));
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container">

      <h1 className="title">Tax Loss Harvesting</h1>

      <div className="card-container">

        <SummaryCard
          title="Pre Harvesting"
          capital={capital}
        />

        <SummaryCard
          title="After Harvesting"
          capital={capital}
          holdings={holdings}
          selected={selected}
        />

      </div>

      <HoldingsTable
        holdings={holdings}
        selected={selected}
        toggleRow={toggleRow}
        toggleAll={toggleAll}
      />

    </div>
  );
}

export default App;