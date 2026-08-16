/* =================================
   ACCOUNTING SYSTEM
================================= */

console.log("Accounting System started");


/* =================================
   APPLICATION DATA
================================= */

const accountingData = {
    revenue: 0,
    expenses: 0,
    transactions: 0
};


/* =================================
   DASHBOARD
================================= */

function updateDashboard() {

    const revenueElement =
        document.getElementById("revenue");

    const expensesElement =
        document.getElementById("expenses");

    const profitElement =
        document.getElementById("profit");

    const transactionsElement =
        document.getElementById("transactions");


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


/* =================================
   NAVIGATION
================================= */

const navigationButtons =
    document.querySelectorAll(".nav-item");


navigationButtons.forEach(button => {

    button.addEventListener("click", () => {

        navigationButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        console.log(
            "Selected:",
            button.textContent.trim()
        );

    });

});


/* =================================
   JOURNAL BUTTON
================================= */

const journalButton =
    document.getElementById("journalButton");


journalButton.addEventListener("click", () => {

    console.log("Journal Entry selected");

    alert(
        "Journal Entry module will be added in Step 3."
    );

});


/* =================================
   START APPLICATION
================================= */

updateDashboard();