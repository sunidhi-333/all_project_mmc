const express = require('express');
const app = express();
app.use(express.json());
 
const PORT = 3000;
 
// Sample account data
let accounts = [
  { accNo: 'A001', accName: 'Alice', accType: 'Savings', accBalance: 5000, accIsActive: true },
  { accNo: 'A002', accName: 'Bob', accType: 'Current', accBalance: 12000, accIsActive: true },
  { accNo: 'A003', accName: 'Charlie', accType: 'Savings', accBalance: 3000, accIsActive: false },
  { accNo: 'A004', accName: 'David', accType: 'Current', accBalance: 8000, accIsActive: true },
  { accNo: 'A005', accName: 'Eva', accType: 'Savings', accBalance: 1500, accIsActive: false },
  { accNo: 'A006', accName: 'Frank', accType: 'Current', accBalance: 9500, accIsActive: true },
  { accNo: 'A007', accName: 'Grace', accType: 'Savings', accBalance: 4000, accIsActive: true },
  { accNo: 'A008', accName: 'Hannah', accType: 'Current', accBalance: 11000, accIsActive: false },
  { accNo: 'A009', accName: 'Ian', accType: 'Savings', accBalance: 2500, accIsActive: true },
  { accNo: 'A010', accName: 'Jack', accType: 'Current', accBalance: 7000, accIsActive: true },
];
 
// 📘 GET all accounts
app.get('/accounts', (req, res) => {
  res.json(accounts);
});
 

 
// 🚫 GET all inactive accounts
app.get('/accounts/inactive', (req, res) => {
  const inactive = accounts.filter(acc => !acc.accIsActive);
  res.json(inactive);
});
// 🔍 GET account by accNo
app.get('/accounts/:accNo', (req, res) => {
  const account = accounts.find(acc => acc.accNo === req.params.accNo);
  account ? res.json(account) : res.status(404).json({ message: 'Account not found' });
});
 
// 📊 GET account summary
app.get('/accounts/summary', (req, res) => {
  const totalAccounts = accounts.length;
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.accBalance, 0);
  const totalActive = accounts.filter(acc => acc.accIsActive).length;
  const totalInactive = totalAccounts - totalActive;
  const totalSavings = accounts.filter(acc => acc.accType === 'Savings').length;
  const totalCurrent = accounts.filter(acc => acc.accType === 'Current').length;
 
  res.json({
    totalAccounts,
    totalBalance,
    totalActive,
    totalInactive,
    totalSavings,
    totalCurrent
  });
});
 

// 🧹 DELETE all inactive accounts
app.delete('/accounts/inactive/all', (req, res) => {
  const before = accounts.length;
  accounts = accounts.filter(acc => acc.accIsActive);
  const deletedCount = before - accounts.length;
  res.json({ message: `${deletedCount} inactive accounts deleted` });
});
 // 🗑️ DELETE account by accNo
app.delete('/accounts/:accNo', (req, res) => {
  const initialLength = accounts.length;
  accounts = accounts.filter(acc => acc.accNo !== req.params.accNo);
  if (accounts.length < initialLength) {
    res.json({ message: 'Account deleted' });
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});
 
// ➕ ADD new account
app.post('/accounts', (req, res) => {
  const newAccount = req.body;
  const validTypes = ['Savings', 'Current'];
 
  if (!newAccount.accNo || !newAccount.accName || !newAccount.accType || newAccount.accBalance == null || newAccount.accIsActive == null) {
    return res.status(400).json({ message: 'Missing account fields' });
  }
 
  if (!validTypes.includes(newAccount.accType)) {
    return res.status(400).json({ message: 'Invalid account type' });
  }
 
  if (typeof newAccount.accBalance !== 'number') {
    return res.status(400).json({ message: 'Balance must be a number' });
  }
 
  const exists = accounts.some(acc => acc.accNo === newAccount.accNo);
  if (exists) {
    return res.status(409).json({ message: 'Account number already exists' });
  }
 
  accounts.push(newAccount);
  res.status(201).json({ message: 'Account added', account: newAccount });
});
 
// 💰 UPDATE balance by accNo
app.put('/accounts/:accNo/balance', (req, res) => {
  const { accBalance } = req.body;
  const account = accounts.find(acc => acc.accNo === req.params.accNo);
 
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }
 
  if (typeof accBalance !== 'number') {
    return res.status(400).json({ message: 'Invalid balance value' });
  }
 
  account.accBalance = accBalance;
  res.json({ message: 'Balance updated', account });
});
 
// 🧯 Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
 
// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Banking System API running on http://localhost:${PORT}`);
});