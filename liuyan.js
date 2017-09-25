/*
* @Author: 木木
* @Date:   2017-09-25 19:52:04
* @Last Modified by:   木木
* @Last Modified time: 2017-09-25 23:03:33
*/
window.onload=function(){
let box2=document.querySelector('.box2');
let box3=document.querySelector('.box3');
let textarea=document.querySelector('textarea');
let button=document.querySelector('button');

  button.onclick = function(){
       // alert(textarea.value);
    let text = textarea.value;
    let divs = document.createElement('div');
    divs.style.width='400px';
    divs.style.height='30px';
    divs.style.marginBottom='15px';
    
    box3.prepenchild(divs)
    divs.innerHTML=text;
    text.innerHTML="";

}










}