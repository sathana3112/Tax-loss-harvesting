<<<<<<< HEAD
import HoldingRow from "./HoldingRow";

function HoldingsTable({
  holdings,
  selected,
  toggleRow,
  toggleAll,
}) {
  return (
    <div className="table-container">

      <table>

        <thead>

          <tr>

            <th>
              <input
                type="checkbox"
                checked={selected.length === holdings.length}
                onChange={toggleAll}
              />
            </th>

            <th>Asset</th>

            <th>Holdings / Avg Buy Price</th>

            <th>Current Price</th>

            <th>Short Term Gain</th>

            <th>Long Term Gain</th>

            <th>Amount To Sell</th>

          </tr>

        </thead>

        <tbody>

          {holdings.map((item) => (

            <HoldingRow
              key={item.coin}
              item={item}
              selected={selected}
              toggleRow={toggleRow}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}

=======
import HoldingRow from "./HoldingRow";

function HoldingsTable({
  holdings,
  selected,
  toggleRow,
  toggleAll,
}) {
  return (
    <div className="table-container">

      <table>

        <thead>

          <tr>

            <th>
              <input
                type="checkbox"
                checked={selected.length === holdings.length}
                onChange={toggleAll}
              />
            </th>

            <th>Asset</th>

            <th>Holdings / Avg Buy Price</th>

            <th>Current Price</th>

            <th>Short Term Gain</th>

            <th>Long Term Gain</th>

            <th>Amount To Sell</th>

          </tr>

        </thead>

        <tbody>

          {holdings.map((item) => (

            <HoldingRow
              key={item.coin}
              item={item}
              selected={selected}
              toggleRow={toggleRow}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}

>>>>>>> f936125291c8cbb014860798ad684134a2593e45
export default HoldingsTable;