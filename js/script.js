function changeText0(){
  var rezultat = 10.99,
      vol = 0.01,
      delivery = 1500,
      weight = 0.012,
      discount = 54.51;
 
  rezultat *= parseFloat(document.getElementById('a').value);
  rezultat *= parseFloat(document.getElementById('b').value);
  vol *= parseFloat(document.getElementById('a').value);
  vol *= parseFloat(document.getElementById('b').value);
  weight *= parseFloat(document.getElementById('a').value);
  weight *= parseFloat(document.getElementById('b').value);
  document.getElementById('rezultat').innerHTML = ((rezultat + delivery) / 100 * discount).toFixed(2) + ' руб.';
  document.getElementById('vol').innerHTML = vol;
  document.getElementById('weight').innerHTML = weight;
  document.getElementById('dis').innerHTML = ((rezultat + delivery) - ((rezultat + delivery) / 100 * discount)).toFixed(2) + ' руб.';
};

