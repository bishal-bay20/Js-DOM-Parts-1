//console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
 //document.title = 123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
 
// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = 'Goodbey';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASS //
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent = 'Hello 2';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'red';

// Gives error
// item.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i< item.length; i++){
  //  item[1].style.backgroundColor = '#f4f4f4';
// }
 
// GETELEMENTSBYCLASS //
 // var li = document.getElementsByTagName('li');
 // console.log(li);
 // console.log(li[1]);
 // li[1].textContent = 'Hello 2';
 // li[1].style.fontWeight = 'bold';
 // li[1].style.backgroundColor = 'red';

// Gives error
// item.style.backgroundColor = '#f4f4f4';

 // for(var i = 0; i< li.length; i++){
   // li[1].style.backgroundColor = '#f4f4f4';
 // }
 
 // QUERYSELECTOR //
 // var header = document.querySelector('#main-header');
 // header.style.borderBottom = 'solid 4px #ccc';

 // var input = document.querySelector('input');
 // input.value = 'Hello world'

 // var submit = document.querySelector('input[type="submit"]');
 // submit.value='SEND'

 // var item = document.querySelector('.list-group-item');
 // item.style.color = 'red'

 // var lastItem = document.querySelector('.// list-group-item:last-child');
 // lastItem.style.color = 'green'

 // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
 // secondItem.style.color = 'blue'

 // var  thirdItem = document.querySelector('.list-group-item:nth-child(3)');
 // thirdItem.style.color = '#FF1493'

 // QUERYSELECTOR //
 var titles = document.querySelectorAll('.title');

 console.log(titles);
 titles[0].textContent = 'Hello';

 var odd = document.querySelectorAll('li:nth-child(odd)');
 var even = document.querySelectorAll('li:nth-child(even)');

 for(var j = 0; j < odd.length; j++){
    odd[j].style.backgroundColor = 'yellow';
    odd[j].style.color = 'red';
    even[j].style.backgroundColor = '#ccc';
    even[j].style.color = 'green';
 }

  