const backArrouw=document.getElementById('arrow-1');
const nextArrow=document.getElementById('arrow-2')
let topImage=document.getElementById('top-left');
let topRightH1=document.getElementById('top-right-h1')
let topRightP=document.getElementById('top-right-p')
let backimgcount=0;
let imgcount=0;
const arrowDiv=document.getElementById('arrows');
let body=document.getElementById('body')
nextArrow.onclick=function click2(){
    if(window.innerWidth<376){
    imgcount++;
    console.log(imgcount)
    if(imgcount===1){topImage.style.backgroundImage="url(images/mobile-image-hero-2.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
}
    if(imgcount===2){
        topImage.style.backgroundImage="url(images/mobile-image-hero-3.jpg)";
    topRightH1.innerHTML='  Manufactured with the best materials'
    topRightP.innerHTML=` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`

    }
    if(imgcount===3){
        topImage.style.backgroundImage="url(images/mobile-image-hero-1.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    imgcount=0
    }
}
else{
    imgcount++;
    console.log(imgcount)
    if(imgcount===1){topImage.style.backgroundImage="url(images/desktop-image-hero-2.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
}
    if(imgcount===2){
        topImage.style.backgroundImage="url(images/desktop-image-hero-3.jpg)";
    topRightH1.innerHTML='  Manufactured with the best materials'
    topRightP.innerHTML=` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`

    }
    if(imgcount===3){
        topImage.style.backgroundImage="url(images/desktop-image-hero-1.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    imgcount=0
    }
}
}
backArrouw.onclick=function click1(){
    if(window.innerWidth<376)
    {
    backimgcount--;
    console.log(backimgcount)
    if(backimgcount===-1){topImage.style.backgroundImage="url(images/mobile-image-hero-2.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
}
    if(backimgcount===-2){
        topImage.style.backgroundImage="url(images/mobile-image-hero-3.jpg)";
    topRightH1.innerHTML='  Manufactured with the best materials'
    topRightP.innerHTML=` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
   
    }
    if(backimgcount===-3){
        topImage.style.backgroundImage="url(images/mobile-image-hero-1.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    backimgcount=0
    }
}else{
    backimgcount--;
    console.log(backimgcount)
    if(backimgcount===-1){topImage.style.backgroundImage="url(images/desktop-image-hero-2.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
}
    if(backimgcount===-2){
        topImage.style.backgroundImage="url(images/desktop-image-hero-3.jpg)";
    topRightH1.innerHTML='  Manufactured with the best materials'
    topRightP.innerHTML=` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
   
    }
    if(backimgcount===-3){
        topImage.style.backgroundImage="url(images/desktop-image-hero-1.jpg)";
    topRightH1.innerHTML=' We are available all across the globe'
    topRightP.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    backimgcount=0
    }
}
}

let openMenuButton=document.getElementById('open-menu')
let closeMenuButton=document.getElementById('close-menu')
let header=document.getElementById("header")
let burgerMenu=document.getElementById('burger-menu')

let topLeft=document.getElementById('top-left')
let topRight=document.getElementById('top-right')
let bottomContent=document.getElementById('bottom-content')
let about=document.getElementById('about')
function openMenu(){
    openMenuButton.style.display='none'
    closeMenuButton.style.display='block'
    burgerMenu.style.display='flex'
    topLeft.style.filter='brightness(40%)'
    topRight.style.filter='brightness(40%)'
    bottomContent.style.filter='brightness(40%)'
    arrowDiv.style.top='-14%'
}
function closeMenu(){
    openMenuButton.style.display='block'
    closeMenuButton.style.display='close'
    burgerMenu.style.display='none'
    topLeft.style.filter='brightness(100%)'
    topRight.style.filter='brightness(100%)'
    bottomContent.style.filter='brightness(100%)'
    arrowDiv.style.top='-14%'
}


