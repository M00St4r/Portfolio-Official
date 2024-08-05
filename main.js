window.addEventListener("load", function (_event) {
    var project1 = document.querySelector(".item1");
    var project1text = document.querySelector(".item2");
    var project2 = document.querySelector(".item3");
    var project2text = document.querySelector(".item4");
    var project3 = document.querySelector(".item5");
    var project3text = document.querySelector(".item6");
    var project4 = document.querySelector(".item7");
    var project4text = document.querySelector(".item8");
    project1 === null || project1 === void 0 ? void 0 : project1.addEventListener("click", function (_event) {
        window.location.href = "Portfolio-Official/projectPages/Project1";
    });
    project1text === null || project1text === void 0 ? void 0 : project1text.addEventListener("click", function (_event) {
        window.location.href = "https://m00st4r.github.io/Portfolio-Official/projectPages/Project1";
    });
    project2 === null || project2 === void 0 ? void 0 : project2.addEventListener("click", function (_event) {
        alert("clicked on project 2");
    });
    project2text === null || project2text === void 0 ? void 0 : project2text.addEventListener("click", function (_event) {
        alert("clicked on project 2");
    });
    project3 === null || project3 === void 0 ? void 0 : project3.addEventListener("click", function (_event) {
        alert("clicked on project 3");
    });
    project3text === null || project3text === void 0 ? void 0 : project3text.addEventListener("click", function (_event) {
        alert("clicked on project 3");
    });
    project4 === null || project4 === void 0 ? void 0 : project4.addEventListener("click", function (_event) {
        alert("clicked on project 4");
    });
    project4text === null || project4text === void 0 ? void 0 : project4text.addEventListener("click", function (_event) {
        alert("clicked on project 4");
    });
});
