(function () {
    const screenInput = document.querySelector(".screen");
    const btnAll = document.querySelectorAll(".btn");
    const equalBtn = document.querySelector(".btn-equal");
    const clearBtn = document.querySelector(".btn-clear");

    if (btnAll.length > 0) {
        btnAll.forEach(function (singleBtn) {
            singleBtn.addEventListener("click", function (event) {
                const currentNumber = event.target.dataset.num;
                screenInput.value += currentNumber;
                event.preventDefault();
            });
        });
    }

    clearBtn.addEventListener("click", function (event) {
        screenInput.value = "";
    });

    equalBtn.addEventListener("click", function (event) {
        if (screenInput.value == "") {
            alert("Please add some calculation");
        } else {
                screenInput.value = eval(screenInput.value);
        }
    });
})();