function toggleLogin(elem) {
    if (elem.innerText === "Login") {
        elem.innerText = "Logout";
    } else {
        elem.innerText = "Login";
    }
}

function removeButton(elem) {
    elem.parentNode.remove();
}

function likeAlert(message) {
    alert(message);
}