function goLuas() {
    var form = document.getElementById("formLuas");
    form.style.display = "block";
    form = document.getElementById("formKeliling");
    form.style.display = "none";
    var buttons = document.getElementsByClassName("buttons");
    buttons[0].classList.toggle("active");
    buttons[1].classList.toggle("active");
}
function goKeliling() {
    var form = document.getElementById("formKeliling");
    form.style.display = "block";
    form = document.getElementById("formLuas");
    form.style.display = "none";
    var buttons = document.getElementsByClassName("buttons");
    buttons[0].classList.toggle("active");
    buttons[1].classList.toggle("active");
}

function submitLuas() {
    var answerBox = document.getElementById("answer");
    var tinggi = document.getElementById("tinggi").value;
    var alas = document.getElementById("alas").value;
    answerBox.innerHTML = tinggi * alas / 2;
}
function submitKeliling() {
    var answerBox = document.getElementById("answer");
    var sisiA = document.getElementById("sisiA").value;
    var sisiB = document.getElementById("sisiB").value;
    var sisiC = document.getElementById("sisiC").value;
    answerBox.innerHTML = Number(sisiA) + Number(sisiB) + Number(sisiC);
    return false;
}