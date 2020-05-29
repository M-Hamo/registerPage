var login_form = document.getElementById('login-form');
var login_form_btn = document.getElementById('login-form-btn');

var register_form = document.getElementById('register-form');
var register_form_btn = document.getElementById('register-form-btn');

var moved_div = document.getElementById('btn');

register_form_btn.onclick = () => {

    login_form.style.left = "-400px";
    register_form.style.left = "30px";
    moved_div.style.left = "110px";
}
login_form_btn.onclick = () => {

    login_form.style.left = "30px";
    register_form.style.left = "430px";
    moved_div.style.left = "0";
}