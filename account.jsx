const ATMDeposit = ({ onChange, isDeposit }) => {
  if (isDeposit !== undefined) {
    const choice = ["Deposit", "Withdraw"];
    return (
      <label className="label huge">
        <h3>{choice[Number(!isDeposit)]}</h3>
        <input type="number" onChange={onChange} />
        <input type="submit" />
      </label>
    );
  } else {
    return (
      <label className="label huge">
        <h3>Please select the transaction you want</h3>
      </label>
    )
  }
  
};

const Account = () => {
  const [transactionState, settransactionState] = React.useState(0);
  const [accountState, setaccountState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(undefined);
  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    settransactionState(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = 0;
    if (isDeposit) {
      newTotal = accountState + transactionState;
    } else {
      if (transactionState <= accountState) {
        newTotal = accountState - transactionState;
      } else {
        alert(
          `You are withdrawing more money than you have on your account! Please change the value.`
        );
        newTotal = accountState;
      }
    }
    alert(`Account total = ${newTotal}`);
    setaccountState(newTotal);
    event.preventDefault();
  };
  const handleDeposit = () => {
    setIsDeposit(true);
  };
  const handleWithdraw = () => {
    setIsDeposit(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance: {accountState}</h2>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} />
      <br></br>
      <button onClick={handleDeposit} type="button">
        Deposit
      </button>
      <button onClick={handleWithdraw} type="button">
        Withdraw
      </button>
    </form>
  );
};
ReactDOM.render(<Account />, document.getElementById("root"));
