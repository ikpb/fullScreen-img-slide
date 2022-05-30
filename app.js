const imgView = document.getElementById('bg');
const icon1 = document.querySelector('#rt-icon')
const icon2 = document.querySelector('#lt-icon')

imgView.addEventListener("click", onRightClick)

icon1.addEventListener("click", onPageClick)
icon2.addEventListener("click", onPageClick)

let img1 = 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
let img2 = 'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740'
let img3 = 'https://images.unsplash.com/photo-1513758173941-bfbd2e4166f5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738'

var imgValues =[img1,img2,img3]
function onRightClick(e){
    let currentImg = imgView.style.backgroundImage;

    currentImg = convertBgImgToString(imgView.style.backgroundImage)

    const index = imgValues.findIndex(img => img.includes(currentImg))

    if(index<2){
        imgView.style.backgroundImage =`url(${imgValues[index+1]})` 
    }else{
        imgView.style.backgroundImage =`url(${imgValues[0]})` 
    }
    currentImg = convertBgImgToString(imgView.style.backgroundImage)
}

function onPageClick(e){
    if(e.target.className.includes('right')){
        let currentImg = imgView.style.backgroundImage;
        currentImg = convertBgImgToString(imgView.style.backgroundImage)

    const index = imgValues.findIndex(img => img.includes(currentImg))
    if(index<2){
        imgView.style.backgroundImage =`url(${imgValues[index+1]})`  
    }else{
        imgView.style.backgroundImage =`url(${imgValues[0]})`
    }
    }
    if(e.target.className.includes('left')){
        let currentImg = imgView.style.backgroundImage;

        currentImg = convertBgImgToString(imgView.style.backgroundImage)

    const index = imgValues.findIndex(img => img.includes(currentImg))
    if(index>0){
        imgView.style.backgroundImage =`url(${imgValues[index-1]})`
    }else{
        imgView.style.backgroundImage =`url(${imgValues[2]})` 
    }
    }
}
function convertBgImgToString(bgUrl){
    let url = bgUrl.slice(5,-2)
    return url
}
