
function SummaryCard({ title, capital, holdings = [], selected = [] }) {
  if (!capital) return null;

  let stProfit = capital.stcg.profits;
  let stLoss = capital.stcg.losses;
  let ltProfit = capital.ltcg.profits;
  let ltLoss = capital.ltcg.losses;

  selected.forEach((coin) => {
    const asset = holdings.find((h) => h.coin === coin);
    if (!asset) return;

    if (asset.stcg.gain >= 0) {
      stProfit += asset.stcg.gain;
    } else {
      stLoss += Math.abs(asset.stcg.gain);
    }

    if (asset.ltcg.gain >= 0) {
      ltProfit += asset.ltcg.gain;
    } else {
      ltLoss += Math.abs(asset.ltcg.gain);
    }
  });

  const stNet = stProfit - stLoss;
  const ltNet = ltProfit - ltLoss;
  const realised = stNet + ltNet;

  const original =
    capital.stcg.profits -
    capital.stcg.losses +
    capital.ltcg.profits -
    capital.ltcg.losses;

  const saving = original - realised;

  return (
    <div className={title === "Pre Harvesting" ? "card dark" : "card blue"}>
      <h2>{title}</h2>

      <h3>Short Term</h3>

      <p>
        <span>Profit</span>
        <span>₹{stProfit.toFixed(2)}</span>
      </p>

      <p>
        <span>Loss</span>
        <span>₹{stLoss.toFixed(2)}</span>
      </p>

      <p>
        <strong>Net Capital Gain</strong>
        <strong>₹{stNet.toFixed(2)}</strong>
      </p>

      <hr style={{ margin: "15px 0" }} />

      <h3>Long Term</h3>

      <p>
        <span>Profit</span>
        <span>₹{ltProfit.toFixed(2)}</span>
      </p>

      <p>
        <span>Loss</span>
        <span>₹{ltLoss.toFixed(2)}</span>
      </p>

      <p>
        <strong>Net Capital Gain</strong>
        <strong>₹{ltNet.toFixed(2)}</strong>
      </p>

      <hr style={{ margin: "15px 0" }} />

      <h3>Realised Capital Gains</h3>

      <h2>₹{realised.toFixed(2)}</h2>

      {title === "After Harvesting" && saving > 0 && (
        <p className="saving">
          You're going to save ₹{saving.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default SummaryCard;





// function SummaryCard({ title, capital, holdings = [], selected = [] }) {
//   if (!capital) return null;

//   let stProfit = capital.stcg.profits;
//   let stLoss = capital.stcg.losses;
//   let ltProfit = capital.ltcg.profits;
//   let ltLoss = capital.ltcg.losses;

//   selected.forEach((coin) => {
//     const asset = holdings.find((h) => h.coin === coin);
//     if (!asset) return;

//     if (asset.stcg.gain >= 0) {
//       stProfit += asset.stcg.gain;
//     } else {
//       stLoss += Math.abs(asset.stcg.gain);
//     }

//     if (asset.ltcg.gain >= 0) {
//       ltProfit += asset.ltcg.gain;
//     } else {
//       ltLoss += Math.abs(asset.ltcg.gain);
//     }
//   });

//   const stNet = stProfit - stLoss;
//   const ltNet = ltProfit - ltLoss;
//   const realised = stNet + ltNet;

//   const original =
//     capital.stcg.profits -
//     capital.stcg.losses +
//     capital.ltcg.profits -
//     capital.ltcg.losses;

//   const saving = original - realised;

//   return (
//     <div className={title === "Pre Harvesting" ? "card dark" : "card blue"}>
//       <h2>{title}</h2>

//       <p>ST Profit: ₹{stProfit.toFixed(2)}</p>
//       <p>ST Loss: ₹{stLoss.toFixed(2)}</p>
//       <p>LT Profit: ₹{ltProfit.toFixed(2)}</p>
//       <p>LT Loss: ₹{ltLoss.toFixed(2)}</p>

//       <h3>Realised Gain: ₹{realised.toFixed(2)}</h3>

//       {title === "After Harvesting" && saving > 0 && (
//         <p>You're going to save ₹{saving.toFixed(2)}</p>
//       )}
//     </div>
//   );
// }

// export default SummaryCard;