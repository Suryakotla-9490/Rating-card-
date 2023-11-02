
const maincontainer = document.querySelector('.main-container')
const thankyou = document.querySelector('.thankyoucard')
const spanrate = document.querySelector('.rate')
const stars = document.querySelector('.showStars')
var storedata

const button = document.querySelectorAll('.btn')
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
         console.log (btn.innerHTML)   
        storedata = btn.innerHTML
    });
})


function newpage(){
   
     if(!storedata){
           alert('Enter The Rating')
        }
     else{
        spanrate.innerHTML=storedata
        maincontainer.classList.add('hide')
        thankyou.classList.remove('hide')
         }    
      
    //    for(i=1;i<=spanrate.innerHTML;i++){
    //       const h1 = document.createElement('h1')
    //       h1.innerHTML = '&#9733;'
    //       h1.style.margin = '0.5rem;'
            
    //       stars.appendChild(h1)
    //    } 

}

// function back(){
//        maincontainer.classList.remove('hide')
//        thankyou.classList.add('hide')
//        storedata=""
//        spanrate.innerHTML = ' '
//        while(stars.firstChild){
//         stars.removeChild(stars.firstChild)
//        }
// }