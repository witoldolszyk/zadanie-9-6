
var btn = document.getElementById('addElem'),
    list = document.getElementById('list');

btn.addEventListener('click', function () {
    var addsthnew = document.createElement('li'),
        calculate = document.getElementsByTagName('li');
    addsthnew.innerHTML = 'item ' +(calculate.length+1);
    list.appendChild(addsthnew);

});
