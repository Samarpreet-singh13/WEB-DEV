const button=document.querySelectorAll('.button')
const body=document.querySelector('body')

button.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='brown'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
    })
})