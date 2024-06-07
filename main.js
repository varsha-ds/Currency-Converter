document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("currency-form");
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const resultDiv = document.getElementById("result");

    // Currency options with country codes for flags
    const currencies = [
        { code: "USD", name: "United States Dollar"},
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "British Pound" },
        { code: "JPY", name: "Japanese Yen"},
        { code: "INR", name: "Indian Rupee"},
        { code: "AUD", name: "Australian Dollar"},
        { code: "CAD", name: "Canadian Dollar"},
        { code: "CHF", name: "Swiss Franc" },
        { code: "CNY", name: "Chinese Yuan"},
        { code: "HKD", name: "Hong Kong Dollar"},
        { code: "NZD", name: "New Zealand Dollar"}
    ];

    currencies.forEach(currency => {
        const optionFrom = document.createElement("option");
        optionFrom.value = currency.code;
        optionFrom.textContent = `${currency.code} - ${currency.name}`;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = currency.code;
        optionTo.textContent = `${currency.code} - ${currency.name}`;
        toCurrency.appendChild(optionTo);
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (!amount || !from || !to) {
            resultDiv.textContent = "Please fill in all fields.";
            return;
        }

        // Placeholder conversion rates (you would typically fetch this from an API)
        const conversionRates = {
            USD: { EUR: 0.85, GBP: 0.75, JPY: 110, INR: 73.50, AUD: 1.35, CAD: 1.25, CHF: 0.92, CNY: 6.45, HKD: 7.75, NZD: 1.40 },
            EUR: { USD: 1.18, GBP: 0.88, JPY: 129, INR: 86.50, AUD: 1.59, CAD: 1.47, CHF: 1.08, CNY: 7.58, HKD: 9.13, NZD: 1.65 },
            GBP: { USD: 1.34, EUR: 1.14, JPY: 146, INR: 98.50, AUD: 1.80, CAD: 1.68, CHF: 1.23, CNY: 8.60, HKD: 10.50, NZD: 1.87 },
            JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, INR: 0.67, AUD: 0.012, CAD: 0.011, CHF: 0.0084, CNY: 0.059, HKD: 0.072, NZD: 0.012 },
            INR: { USD: 0.014, EUR: 0.012, GBP: 0.010, JPY: 1.49, AUD: 0.018, CAD: 0.017, CHF: 0.013, CNY: 0.088, HKD: 0.11, NZD: 0.019 },
            AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 82, INR: 55.80, CAD: 0.93, CHF: 0.69, CNY: 4.77, HKD: 5.74, NZD: 1.04 },
            CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, JPY: 88, INR: 59.80, AUD: 1.08, CHF: 0.74, CNY: 5.11, HKD: 6.14, NZD: 1.12 },
            CHF: { USD: 1.09, EUR: 0.92, GBP: 0.81, JPY: 96, INR: 65.50, AUD: 1.45, CAD: 1.35, CNY: 6.86, HKD: 8.24, NZD: 1.52 },
            CNY: { USD: 0.16, EUR: 0.13, GBP: 0.12, JPY: 15, INR: 11.30, AUD: 0.21, CAD: 0.20, CHF: 0.15, HKD: 1.20, NZD: 0.22 },
            HKD: { USD: 0.13, EUR: 0.11, GBP: 0.095, JPY: 13, INR: 9.43, AUD: 0.17, CAD: 0.16, CHF: 0.12, CNY: 0.83, NZD: 0.18 },
            NZD: { USD: 0.71, EUR: 0.61, GBP: 0.53, JPY: 79, INR: 53.80, AUD: 0.96, CAD: 0.89, CHF: 0.66, CNY: 4.49, HKD: 5.53 }
        };

        if (from === to) {
            resultDiv.textContent = `Converted amount: ${amount.toFixed(2)} ${to}`;
            return;
        }

        const rate = conversionRates[from][to];
        const convertedAmount = amount * rate;

        resultDiv.textContent = `Converted amount: ${convertedAmount.toFixed(2)} ${to}`;
    });
});
