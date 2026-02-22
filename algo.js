// Initial Values
let balance = 1000;
let holdings = 0;
let stockPrice = 100;
let round = 1;

// Update stock price (80 - 120)
function updatePrice() {
    stockPrice = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    return stockPrice;
}

// Decide action
function decideAction(price) {
    if (price < 90 && balance >= price) return "BUY";
    if (price > 110 && holdings > 0) return "SELL";
    return "HOLD";
}

// Execute the trade
function trade(action) {
    if (action === "BUY") {
        balance -= stockPrice;
        holdings++;
    }
    else if (action === "SELL") {
        balance += stockPrice;
        holdings--;
    }
}

// Display logs in UI
function log(message) {
    const logBox = document.getElementById("logBox");
    logBox.innerHTML += message + "<br>";
    logBox.scrollTop = logBox.scrollHeight;
}

// Run one round
function runRound() {
    let price = updatePrice();
    let action = decideAction(price);

    trade(action);

    // Update UI
    document.getElementById("price").innerText = price;
    document.getElementById("action").innerText = action;
    document.getElementById("balance").innerText = balance;
    document.getElementById("holdings").innerText = holdings;

    log(`Round ${round}: Price = ₹${price}, Action = ${action}, Balance = ₹${balance}, Holdings = ${holdings}`);

    round++;
}

// Run 10 rounds
function runTenRounds() {
    for (let i = 0; i < 10; i++) {
        runRound();
    }
}

// Button listeners
document.getElementById("runRound").addEventListener("click", runRound);
document.getElementById("runTenRounds").addEventListener("click", runTenRounds);
