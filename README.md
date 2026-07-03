# Tax Loss Harvesting

A React application that simulates Tax Loss Harvesting by allowing users to select crypto holdings and view updated capital gains after harvesting.

## Features

- Pre Harvesting Summary Card
- After Harvesting Summary Card
- Dynamic calculation of:
  - Short-Term Profits
  - Short-Term Losses
  - Net Short-Term Capital Gains
  - Long-Term Profits
  - Long-Term Losses
  - Net Long-Term Capital Gains
  - Realised Capital Gains
- Holdings Table
- Select/Deselect Holdings
- Select All Checkbox
- Amount to Sell Calculation
- Savings Calculation
- Mock API using Promises
- Responsive UI

## Tech Stack

- React
- JavaScript
- CSS
- Vite

## Folder Structure

```
src
│
├── Components
│   ├── HoldingRow.jsx
│   ├── HoldingsTable.jsx
│   ├── Loader.jsx
│   └── SummaryCard.jsx
│
├── Data
│   ├── CapitalGains.json
│   └── Holdings.json
│
├── Services
│   └── api.js
│
├── Utils
│   ├── Calculations.js
│   └── FormatCurrency.js
│
├── App.jsx
├── main.jsx
└── styles.css
```

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/tax-loss-harvesting.git
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

Open

```
http://localhost:5173
```

## Screenshots

### Dashboard

(Add your screenshot here)
<img width="1920" height="1080" alt="Screenshot (128)" src="https://github.com/user-attachments/assets/4af2e328-1a69-4dd4-a140-63b0222bf2bb" />
<img width="1920" height="1080" alt="Screenshot (129)" src="https://github.com/user-attachments/assets/3c5cd5db-ba26-43e8-881f-b219bd5b7dd7" />
<img width="1920" height="1080" alt="Screenshot (129)" src="https://github.com/user-attachments/assets/5d36179c-3961-483f-8cba-f7ed7df2f21b" />


### After Harvesting

(Add screenshot after selecting holdings)

## Assumptions

- Capital Gains data is mocked using Promise.
- Holdings data is mocked using Promise.
- Net Capital Gain = Profit − Loss.
- Realised Capital Gains = ST Net + LT Net.
- Savings are displayed only when the realised gain after harvesting is less than the pre-harvesting realised gain.

## Deployment

Live URL

```
https://your-app.vercel.app
```

## Author

Sathana Logaramanan
