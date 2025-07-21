document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('expense-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const categorySummary = document.getElementById('category-summary');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    renderExpenses();
    renderCategorySummary();

    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('expense-name').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        let date = document.getElementById('expense-date').value;
        const category = document.getElementById('expense-category').value;

        if (!date) {
            date = today;
        }

        expenses.push({ name, amount, date, category });
        localStorage.setItem('expenses', JSON.stringify(expenses));

        renderExpenses();
        renderCategorySummary();

        expenseForm.reset();
        dateInput.value = today;
    });

    function renderExpenses() {
        expenseList.innerHTML = '';
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount (₹)</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        expenses.forEach(exp => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${exp.name}</td>
                <td>₹${exp.amount.toFixed(2)}</td>
                <td>${exp.category}</td>
                <td>${exp.date}</td>
            `;
            table.querySelector('tbody').appendChild(row);
        });
        expenseList.appendChild(table);
    }

    function renderCategorySummary() {
        const summary = {};
        expenses.forEach(exp => {
            if (!summary[exp.category]) summary[exp.category] = 0;
            summary[exp.category] += exp.amount;
        });

        categorySummary.innerHTML = '';
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total (₹)</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        for (const cat in summary) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cat}</td>
                <td>₹${summary[cat].toFixed(2)}</td>
            `;
            table.querySelector('tbody').appendChild(row);
        }
        categorySummary.appendChild(table);
    }
});