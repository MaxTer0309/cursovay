document.getElementById('cb1').addEventListener('change', function (e) {
   document.getElementById('sel1').disabled = !e.target.checked
   document.getElementById('op1').selected = !e.target.checked
 })

 document.getElementById('cb2').addEventListener('change', function (e) {
   document.getElementById('sel2').disabled = !e.target.checked
   document.getElementById('op2').selected = !e.target.checked
 })

 document.getElementById('cb3').addEventListener('change', function (e) {
   document.getElementById('sel3').disabled = !e.target.checked
   document.getElementById('op3').selected = !e.target.checked
 })

document.getElementById('cb4').addEventListener('change', function (e) {
   document.getElementById('sel4').disabled = !e.target.checked
   document.getElementById('op4').selected = !e.target.checked
 })

function calc() {

  var sel1 = document.getElementById('sel1');
  var sel2 = document.getElementById('sel2');
  var sel3 = document.getElementById('sel3');
  var sel4 = document.getElementById('sel4');
  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var result1 = document.getElementById('result1'); 
  var price = 0;
  var price1 = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var s1 = parseInt(sel1.options[sel1.selectedIndex].value);
  var s2 = parseInt(sel2.options[sel2.selectedIndex].value);
  var s3 = parseInt(sel3.options[sel3.selectedIndex].value);
  var s4 = parseInt(sel4.options[sel4.selectedIndex].value);
    
  price += (v*c*k)+s1+s2+s3+s4;
  price = price;
  price1 = price-(price*0.05);
  
  result.innerHTML = price;
  result1.innerHTML = price1;
}

function calk1(){
  var sel2 = document.getElementById('sel2');
  var sel3 = document.getElementById('sel3');
  var sel4 = document.getElementById('sel4');
  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var result1 = document.getElementById('result1'); 
  var price = 0;
  var price1 = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var s2 = parseInt(sel2.options[sel2.selectedIndex].value);
  var s3 = parseInt(sel3.options[sel3.selectedIndex].value);
  var s4 = parseInt(sel4.options[sel4.selectedIndex].value);

  price += (v*c*k)+s2+s3+s4;
  price = price;
  price1 = price-(price*0.05);
  
  result.innerHTML = price;
  result1.innerHTML = price1;
}

function calk2(){
  var sel1 = document.getElementById('sel1');
  var sel3 = document.getElementById('sel3');
  var sel4 = document.getElementById('sel4');
  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var result1 = document.getElementById('result1'); 
  var price = 0;
  var price1 = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var s1 = parseInt(sel1.options[sel1.selectedIndex].value);
  var s3 = parseInt(sel3.options[sel3.selectedIndex].value);
  var s4 = parseInt(sel4.options[sel4.selectedIndex].value);

  price += (v*c*k)+s1+s3+s4;
  price = price;
  price1 = price-(price*0.05);
  
  result.innerHTML = price;
  result1.innerHTML = price1;
}

function calk3(){
  var sel1 = document.getElementById('sel1');
  var sel2 = document.getElementById('sel2');
  var sel4 = document.getElementById('sel4');
  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var result1 = document.getElementById('result1'); 
  var price = 0;
  var price1 = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var s1 = parseInt(sel1.options[sel1.selectedIndex].value);
  var s2 = parseInt(sel2.options[sel2.selectedIndex].value);
  var s4 = parseInt(sel4.options[sel4.selectedIndex].value);

  price += (v*c*k)+s1+s2+s4;
  price = price;
  price1 = price-(price*0.05);
  
  result.innerHTML = price;
  result1.innerHTML = price1;
}

function calk4(){
  var sel1 = document.getElementById('sel1');
  var sel2 = document.getElementById('sel2');
  var sel3 = document.getElementById('sel3');
  var kach = document.getElementById('kach');
  var colich = document.getElementById('colich');
  var vid = document.getElementById('vid');
  
  var result = document.getElementById('result');
  var result1 = document.getElementById('result1'); 
  var price = 0;
  var price1 = 0;
  var v = parseInt(vid.options[vid.selectedIndex].value);
  var c = parseInt(colich.options[colich.selectedIndex].value);
  var k = parseInt(kach.options[kach.selectedIndex].value);
  var s1 = parseInt(sel1.options[sel1.selectedIndex].value);
  var s2 = parseInt(sel2.options[sel2.selectedIndex].value);
  var s3 = parseInt(sel3.options[sel3.selectedIndex].value);

  price += (v*c*k)+s1+s2+s3;
  price = price;
  price1 = price-(price*0.05);
  
  result.innerHTML = price;
  result1.innerHTML = price1;
}

function consoleBG() {
  if ($(window).scrollTop() <= 100) {
    $('#console').css('background', 'none');
  } else {
    $('#console').css('background', '#212529');
  }
}
consoleBG();
$(window).scroll(function() {
  consoleBG();
});



// анимация

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}



(function () {
  var card1 = document.querySelector('.card1');
  var card2 = document.querySelector('.card2');
  var card3 = document.querySelector('.card3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(card1);
  observer.observe(card2);
  observer.observe(card3);
})();