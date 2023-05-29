// CREATE GLOBAL VARIABLE
let balance = 0;

// CLOSER FUNCTION TO RETRIEVE USER NAME
const createUser = () => {
  const getUser = () => {
    userName = prompt('Enter Name');
    document.getElementById('username').innerHTML = userName;
    return name;
  };
  return getUser;
};

// CLOSER FUNCTION TO RETRIEVE USER CREDIT TO ACCOUNT
const createCredit = () => {
  const getCredit = () => {
    do {
      deposit = parseInt(prompt('Enter a deposit'));
    } while (Number.isNaN(Number(deposit)));

    balance += deposit;
    console.log(balance);
    document.getElementById('usercredit').innerHTML = deposit;
    document.getElementById('userbalance').innerHTML = balance;
    return balance;
  };
  return getCredit;
};

// CLOSER FUNCTION TO RETRIEVE USER WITHDRAWL TO ACCOUNT
const createDebit = () => {
  const getDebit = () => {
    do {
      withdrawl = parseFloat(prompt('Enter amount to withdrawl'));
    } while (Number.isNaN(Number(withdrawl)));

    balance -= withdrawl;
    document.getElementById('userdebit').innerHTML = withdrawl;
    document.getElementById('userbalance').innerHTML = balance;
    return balance;
  };
  return getDebit;
};

// EVENT LISTENER
window.addEventListener('load', () => {
  document.getElementById('name').addEventListener('click', createUser());
  document.getElementById('deposit').addEventListener('click', createCredit());
  document.getElementById('withdrawl').addEventListener('click', createDebit());
});
