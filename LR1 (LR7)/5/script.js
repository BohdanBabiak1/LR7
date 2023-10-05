const numbersList = [
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">ЩЩ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><span class="white">Щ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">ЩЩ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">ЩЩ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><span class="white">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><span class="white">Щ</span><br>
    <span class="white">Щ</span><span class="red">Щ</span><span class="white">Щ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
    (`    <span class="red">ЩЩЩ</span><br>
    <span class="red">Щ</span><span class="white">Щ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>
    <span class="white">ЩЩ</span><span class="red">Щ</span><br>
    <span class="red">ЩЩЩ</span><br>`),
]

var captchaElement = document.getElementById("captcha");
var captchaSolution = [];

function GenerateCaptcha(){
    var numberOfNumbers = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    for (let i = 0; i < numberOfNumbers; i++) {
        var randomIndex = Math.floor(Math.random() * numbersList.length);
        captchaSolution += randomIndex;
        var captchaNumber = document.createElement("div");
        captchaNumber.style.display = "inline-block";
        captchaNumber.style.marginRight = "14px";
        captchaNumber.innerHTML = numbersList[randomIndex];
        captchaElement.appendChild(captchaNumber);
    }
}
GenerateCaptcha();

var inputElement = document.getElementById("captchaInput");
var inputCorect = document.getElementById("inputCorect");

    inputElement.addEventListener("input", function() {
        var inputValue = inputElement.value;
        if (inputValue != ''){
            if (inputValue == captchaSolution){
                inputCorect.innerHTML = "Правильно";
                inputCorect.style.color = "green";
            }
            else{
                inputCorect.innerHTML = "Помилка";
                inputCorect.style.color = "red";
            }
        }
    });
