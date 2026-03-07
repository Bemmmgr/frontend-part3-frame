import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// 20010 - the legacy way of connecting components to redux
// recive state from store
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// connect(mapStateToProps) => new function, (BalanceDisplay) => augments
export default connect(mapStateToProps)(BalanceDisplay);
