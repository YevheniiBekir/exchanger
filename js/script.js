'use strict';
document.addEventListener('DOMContentLoaded', () => {

    //console.log//console.log//console.log
    function log(argument){
        console.log(argument);
    }

    const usdTextArea = document.querySelector('.usd_box .usd_textarea'),
          uahTextArea = document.querySelector('.uah_box .uah_textarea'),
          submitBtn = document.querySelector('.submit_button');
    
    usdTextArea.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/current.JSON');
        request.setRequestHeader('Content-type', 'appilcation/json; charset=utf-8');
        request.send();
    });

    const obj = {
        f: 1,
        s: 2,
        t: 3
    };
    
});