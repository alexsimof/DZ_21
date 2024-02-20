let country = document.getElementById('country');
let button = document.getElementById('btn');
let price = document.getElementById('price');
let text = document.getElementById('text');


button.addEventListener('click', function(){
  let getCountry = country.value;
  let getPrice = price.value;

  switch (true) {
    case getCountry == 'ukraine' && getPrice < 500:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;

    case getCountry == 'ukraine' && getPrice == 500:
      text.innerHTML = "Этой суммы достаточно"
      break;
    case getCountry == 'ukraine' && getPrice < 800:
      text.innerHTML = "Этой суммы достаточно"
      break;

    case getCountry == "poland" && getPrice == 800:
      text.innerHTML = "Этой суммы достаточно или можно посетить Украину"
      break;
    case getCountry == "poland" && getPrice < 800:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "poland" && getPrice < 1000:
      text.innerHTML = "Этой суммы достаточно или можно посетить Украину"
      break;

    case getCountry == "bulgaria" && getPrice == 1000:
      text.innerHTML = "Этой суммы достаточно, еще можно посетить Украину или Польшу"
      break;
    case getCountry == "bulgaria" && getPrice < 1000:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "bulgaria" && getPrice < 1200:
      text.innerHTML = "Этой суммы достаточно, еще можно посетить Украину или Польшу"
      break;

    case getCountry == "greece" && getPrice == 1200:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину, Польшу или Болгарию!"
      break;
    case getCountry == "greece" && getPrice < 1200:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "greece" && getPrice < 1300:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину, Польшу или Болгарию!"
      break;

    case getCountry == "spain" && getPrice == 1300:
      text.innerHTML = "Испания! Прекрасный выбор! А еще можно в Украину и Польшу или Болгарию!"
      break;
    case getCountry == "spain" && getPrice < 1300:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "spain" && getPrice < 1400:
      text.innerHTML = "Испания! Прекрасный выбор! А еще можно в Украину и Польшу или Болгарию!"
      break;

    case getCountry == "turkey" && getPrice == 1400:
      text.innerHTML = "Этого достаточно! Еще хватит на Украину и Польшу или Болгарию или Грецию!"
      break;
    case getCountry == "turkey" && getPrice < 1400:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "turkey" && getPrice < 1500:
      text.innerHTML = "Этого достаточно! Еще хватит на Украину и Польшу или Болгарию или Грецию!"
      break;

    case getCountry == "germany" && getPrice == 1500:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину, Польшу, Болгарию или Грецию!"
      break;
    case getCountry == "germany" && getPrice < 1500:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "germany" && getPrice < 1600:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину, Польшу, Болгарию или Грецию!"
      break;

    case getCountry == "austria" && getPrice == 1600: //
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию!"
      break;
    case getCountry == "austria" && getPrice < 1600: //
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "austria" && getPrice < 1700:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию!"
      break;

    case getCountry == "france" && getPrice == 1700:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию!"
      break;
    case getCountry == "france" && getPrice < 1700:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "france" && getPrice < 1800:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию!"
      break;

    case getCountry == "italy" && getPrice == 1800:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию или Францию!"
      break;
    case getCountry == "italy" && getPrice < 1800:
      text.innerHTML = "Недостаточно денег для посещения этой страны"
      break;
    case getCountry == "italy" && getPrice < 2000:
      text.innerHTML = "Этой суммы достаточно, а еще можно посетить Украину и Польшу, Болгарию и Украину, Грецию, Германию, Турцию или Испанию или Францию!"
      break;

  }
  
});

//
const NEWYEAR = 20;
const BLACKFRIDAY = 30;
const SUMMERSALE = 15
let key = document.getElementById('key');
key.addEventListener('click', function(){
  let cost = document.getElementById('cost').value; // цена
  let code = document.getElementById('code').value; // код скидки
  let qty = document.getElementById('qty').value;  // кол-во товара

  switch (true) {
    case :
  }


});