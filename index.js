let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let timerId;

resetBtnEl.addEventListener("click", function(event) {

    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            quoteDisplayEl.value = json.content;
            quoteDisplayEl.textContent = quoteDisplayEl.value;
            spinnerEl.classList.add("d-none");

            timerEl.value = 0;
            timerId = setInterval(function() {
                timerEl.value = timerEl.value + 1;
                timerEl.textContent = timerEl.value;
            }, 1000);
        });


});
submitBtnEl.addEventListener("click", function(event) {
    if (quoteInputEl.value === quoteDisplayEl.value) {
        clearInterval(timerId);
        resultEl.textContent = "You typed in " + timerEl.value + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});