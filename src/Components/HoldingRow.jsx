function HoldingRow({
  item,
  selected,
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
          />

          <div>

            <strong>{item.coin}</strong>

            <p>{item.coinName}</p>

          </div>

        </div>

      </td>

      <td>

        <strong>{item.totalHolding.toFixed(4)}</strong>

        <p>₹ {item.averageBuyPrice.toFixed(2)}</p>

      </td>

      <td>

        ₹ {item.currentPrice.toFixed(2)}

      </td>

      <td>

        ₹ {item.stcg.gain.toFixed(2)}

        <p>{item.stcg.balance.toFixed(4)}</p>

      </td>

      <td>

        ₹ {item.ltcg.gain.toFixed(2)}

        <p>{item.ltcg.balance.toFixed(4)}</p>

      </td>

      <td>

        {checked
          ? item.totalHolding.toFixed(4)
          : "--"}

      </td>

    </tr>
  );
}

export default HoldingRow;