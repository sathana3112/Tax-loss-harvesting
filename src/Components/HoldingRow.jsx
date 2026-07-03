function HoldingRow({
  item,
  selected = [],
  toggleRow,
}) {
  const checked = selected.includes(item.coin);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleRow(item.coin)}
        />
      </td>

      <td>
        <div className="asset">
          <img
            src={item.logo}
            alt={item.coin}
            width="40"
            height="40"
          />

          <div>
            <strong>{item.coin}</strong>
            <p>{item.coinName}</p>
          </div>
        </div>
      </td>

      <td>
        <strong>{Number(item.totalHolding).toFixed(4)}</strong>
        <p>₹ {Number(item.averageBuyPrice).toFixed(2)}</p>
      </td>

      <td>
        ₹ {Number(item.currentPrice).toFixed(2)}
      </td>

      <td>
        ₹ {Number(item.stcg.gain).toFixed(2)}
        <p>{Number(item.stcg.balance).toFixed(4)}</p>
      </td>

      <td>
        ₹ {Number(item.ltcg.gain).toFixed(2)}
        <p>{Number(item.ltcg.balance).toFixed(4)}</p>
      </td>

      <td>
        {checked ? Number(item.totalHolding).toFixed(4) : "--"}
      </td>
    </tr>
  );
}

export default HoldingRow;