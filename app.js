const imgView = document.querySelector('img');
const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')

imgView.addEventListener("click", onRightClick)

icon1.addEventListener("click", onPageClick)
icon2.addEventListener("click", onPageClick)

let img1 = 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
let img2 = 'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740'
let img3 = 'https://images.unsplash.com/photo-1513758173941-bfbd2e4166f5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738'

var imgValues =[img1,img2,img3]
function onRightClick(e){
    let currentImg = imgView.src;

    const index = imgValues.findIndex(img => img ===currentImg)
    if(index<2){
       imgView.src=`${imgValues[index+1]}` 
    }else{
        imgView.src=`${imgValues[0]}` 
    }
}

function onPageClick(e){
    if(e.target.className.includes('right')){
        let currentImg = imgView.src;

    const index = imgValues.findIndex(img => img ===currentImg)
    if(index<2){
       imgView.src=`${imgValues[index+1]}` 
    }else{
        imgView.src=`${imgValues[0]}` 
    }
    }
    if(e.target.className.includes('left')){
        let currentImg = imgView.src;

    const index = imgValues.findIndex(img => img ===currentImg)
    if(index>0){
       imgView.src=`${imgValues[index-1]}` 
    }else{
        imgView.src=`${imgValues[2]}` 
    }
    }
}
