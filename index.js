
let image1=document.querySelector(".mainslide>img");
let i=0
let time=3000;
let image2=document.querySelector(".smallslide>img")



// https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg

let Img=["https://www.kindmeal.my/photos/deal/6/634-3683-m.jpg","https://www.kindmeal.my/photos/deal/7/709-4950-m.jpg","https://www.kindmeal.my/photos/deal/6/664-4296-m.jpg"];
let Img2=["	https://www.kindmeal.my/photos/shop/5/547-4031-m.jpg","	https://www.kindmeal.my/photos/shop/4/405-2630-m.jpg","https://www.kindmeal.my/photos/shop/6/606-4681-m.jpg"]

function imagechange(){
    image1.src=Img[i]
    image2.src=Img2[i]

    if(i<Img.length-1){
        i++
    }
    else{i=0}
    // if(i==Img.length){}
    setTimeout("imagechange()",time);
}
window.onload=imagechange

let pop=document.querySelector(".navimg-child>div:nth-child(4)")
pop.addEventListener("click",popUP)
let con=0
function popUP(){
    document.querySelector(".sign-up").style.display="block"
    document.querySelector(".color").style.opacity=0.4
    con=1
}

let col_pop=document.querySelector(".color")
if(con===1){
col_pop.addEventListener("click",run)
}

console.log(col_up)

function run(){

    document.querySelector(".sign-up").style.display="none"
    document.querySelector(".color").style.opacity=1
    con=0
    
}




