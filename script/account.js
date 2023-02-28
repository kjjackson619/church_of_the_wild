const accountBtn = document.getElementById("accountBtn");

accountBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var accountModal = document.getElementById("accountModal");
    accountModal.style.visibility = "visible";
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");

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


    signup.addEventListener("click", function (e) {
        e.preventDefault();
        var signup = document.getElementById("signup");

    });

});

