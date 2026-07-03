import HoldingRow from "./HoldingRow";

function HoldingsTable({
  holdings = [],
  selected = [],
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
                checked={
                  holdings.length > 0 &&
                  selected.length === holdings.length
                }
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
          {holdings.map((holding, index) => (
            <HoldingRow
              key={`${holding.coin}-${index}`}
              item={holding}
              selected={selected}
              toggleRow={toggleRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingsTable;