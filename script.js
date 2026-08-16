console.log("Accounting System started");

const accountingData = {
    revenue: 0,
    expenses: 0,
    transactions: 0
};

function updateDashboard() {

    const revenueElement = document.getElementById("revenue");
    const expensesElement = document.getElementById("expenses");
    const profitElement = document.getElementById("profit");
    const transactionsElement = document.getElementById("transactions");

    const profit =
        accountingData.revenue -
        accountingData.expenses;

    revenueElement.textContent =
        `₹${accountingData.revenue.toLocaleString("en-IN")}`;

    expensesElement.textContent =
        `₹${accountingData.expenses.toLocaleString("en-IN")}`;

    profitElement.textContent =
        `₹${profit.toLocaleString("en-IN")}`;

    transactionsElement.textContent =
        accountingData.transactions;
}

updateDashboard();