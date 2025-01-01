window.onload = function() {
    document.getElementById("form").onsubmit = function() {
        return checkUsername() && checkPassword() && checkEmail() && checkTel();
    };
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
    document.getElementById("email").onblur = checkEmail;
    document.getElementById("tel").onblur = checkTel;
};

function checkUsername() {
    var username = document.getElementById("username").value;
    var reg_username = /^\w{6,12}$/;
    var flag = reg_username.test(username);
    var s_username = document.getElementById("s_username");
    if (flag) {
        s_username.innerHTML = "<img width='35' height='25' src='./images/28.png'/>";
    } else {
        s_username.innerHTML = "用户名格式有误";
    }
    return flag;
}

function checkPassword() {
    var password = document.getElementById("password").value;
    var reg_password = /^\w{6,12}$/;
    var flag = reg_password.test(password);
    var s_password = document.getElementById("s_password");
    if (flag) {
        s_password.innerHTML = "<img width='35' height='25' src='./images/28.png'/>";
    } else {
        s_password.innerHTML = "密码格式有误";
    }
    return flag;
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = reg_email.test(email);
    var s_email = document.getElementById("s_email");
    if (flag) {
        s_email.innerHTML = "<img width='35' height='25' src='./images/28.png'/>";
    } else {
        s_email.innerHTML = "邮箱格式有误";
    }
    return flag;
}


function checkTel() {
    var tel = document.getElementById("tel").value;
    var reg_tel = /^1[3456789]\d{9}$/;
    var flag = reg_tel.test(tel);
    var s_tel = document.getElementById("s_tel");
    if (flag) {
        s_tel.innerHTML = "<img width='35' height='25' src='./images/28.png'/>";
    } else {
        s_tel.innerHTML = "手机格式有误";
    }
    return flag;
}