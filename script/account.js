const accountBtn = document.getElementById("accountBtn");
const signupSubmit = document.getElementById("create");
const cancel = document.getElementById("cancel");

accountBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var accountModal = document.getElementById("accountModal");
    accountModal.style.visibility = "visible";
    var login = document.getElementById("login");


    login.addEventListener("click", function (e) {
        e.preventDefault();
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        console.log(email.value + password.value);
    });

    check.addEventListener("change", function (e) {
        e.preventDefault();
        var check = document.getElementById("check");
        if (check.checked === true) {
            console.log(check.checked);
            return;
        }
        else {
            console.log(check.checked);
            return false;
        }
    });


});

create.addEventListener("click", function (e) {
    e.preventDefault();
    var email = document.getElementById("new-email");
    var password = document.getElementById("new-password");
    var verify = document.getElementById("verify");

    console.log(email.value + password.value + verify.value);

    if (verify.value === password.value) {
        console.log(true);
        return;
    } else {
        console.log(false)
        alert("Password's do not match!");
    }
});


