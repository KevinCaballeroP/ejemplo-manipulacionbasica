//hi {color:red} es parecido 

const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

form.addEventListener('submit', sumarInpustValue);
btn.addEventListener('mouseover', sumarInpustValue);
function sumarInpustValue(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

//tambien se puede utilizar en type: buttom





/*
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'leon <br> caballero';
p.innerText = "zodiaco";
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'blanco');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = '5464';
const img = document.createElement('img'); //crea elementos html
img.setAttribute('src', 'https://th.bing.com/th/id/R.70b15887926051cbdbc4d2f8a33f568c?rik=0tWnvyCpS0ljhw&pid=ImgRaw&r=0');
console.log(img);

pid.innerHTML = ""; //cambia los elementos en html
pid.append(img);  //agrega elementos html*/