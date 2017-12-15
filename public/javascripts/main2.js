onload = function () {
    
    var challengeSort = document.querySelector("#challenge-sort");
    var challengeSortBox = document.querySelector("#challenge-sort-box");

    challengeSort.addEventListener("click", function () {
        if(!challengeSortBox.classList.contains("on")){
            challengeSortBox.classList.add("on");
        } else {
            challengeSortBox.classList.remove("on");
        }
    });
};