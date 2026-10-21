let eng = false;

function translate() {
    const familiya = document.getElementById("familiya");
    const imya = document.getElementById("imya");
    const otchestvo = document.getElementById("otchestvo");
    const birthday = document.getElementById("birthday");
    const GUMVD = document.getElementById("GUMVD");
    const MOSCVA = document.getElementById("MOSCVA");
    const btn = document.getElementById("translate_btn");

    if (eng === false) {
        familiya.innerText = "Dunyasheva";
        imya.innerText = "Darya";
        otchestvo.innerText = "Aleksandrovna";
        birthday.innerText = "Female 22.02.2007";
        GUMVD.innerText = "GU MVD in c. Moscow";
        MOSCVA.innerText = "c. Moscow";

        eng = true;
    }
    else {
        familiya.innerText = "Дуняшева";
        imya.innerText = "Дарья";
        otchestvo.innerText = "Александровна";
        birthday.innerText = "Жен 22.02.2007";
        GUMVD.innerText = "ГУ МВД ПО Г.МОСКВЕ";
        MOSCVA.innerText = "Г.МОСКВА";
        
        btn.innerText = "Перевести";
        eng = false;
    }
}
const mainButton = document.getElementById("translate_btn");
mainButton.addEventListener('click', translate);