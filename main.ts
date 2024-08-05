window.addEventListener("load", _event => {
    let project1 = document.querySelector(".item1");
    let project1text = document.querySelector(".item2");
    let project2 = document.querySelector(".item3");
    let project2text = document.querySelector(".item4");
    let project3 = document.querySelector(".item5");
    let project3text = document.querySelector(".item6");
    let project4 = document.querySelector(".item7");
    let project4text = document.querySelector(".item8");
    
    project1?.addEventListener("click", _event => {
        alert("clicked on project 1");
    });
    project1text?.addEventListener("click", _event => {
        alert("clicked on project 1");
    });

    project2?.addEventListener("click", _event => {
        alert("clicked on project 2");
    });
    project2text?.addEventListener("click", _event => {
        alert("clicked on project 2");
    });

    project3?.addEventListener("click", _event => {
        alert("clicked on project 3");
    });
    project3text?.addEventListener("click", _event => {
        alert("clicked on project 3");
    });

    project4?.addEventListener("click", _event => {
        alert("clicked on project 4");
    });
    project4text?.addEventListener("click", _event => {
        alert("clicked on project 4");
    });
});