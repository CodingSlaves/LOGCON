onload = function () {

    var challengeSort = document.querySelector("#challenge-sort");
    var challengeSortBox = document.querySelector("#challenge-sort-box");
    var logInTab = document.querySelector("#log-in-tab");
    var signUpTab = document.querySelector("#sign-up-tab");
    var logIn = document.querySelector("#log-in");
    var signUp = document.querySelector("#sign-up");

    challengeSort.addEventListener("click", function () {
        if(!challengeSortBox.classList.contains("on")){
            challengeSortBox.classList.add("on");
        } else {
            challengeSortBox.classList.remove("on");
        }
    })

    logInTab.addEventListener("click", function () {
        logInTab.classList.remove("disabled");
        signUpTab.classList.add("disabled");
        logIn.classList.remove("disabled");
        signUp.classList.add("disabled");
    });

    signUpTab.addEventListener("click", function () {
        logInTab.classList.add("disabled");
        signUpTab.classList.remove("disabled");
        logIn.classList.add("disabled");
        signUp.classList.remove("disabled");
    });
};