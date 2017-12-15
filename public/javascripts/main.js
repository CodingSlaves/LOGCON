onload = function () {

    var logInTab = document.querySelector("#log-in-tab");
    var signUpTab = document.querySelector("#sign-up-tab");
    var logIn = document.querySelector("#log-in");
    var signUp = document.querySelector("#sign-up");

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