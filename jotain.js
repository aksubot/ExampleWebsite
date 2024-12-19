console.log("lol");

/*const list = document.getElementsByName("image");

let indexlist = [];
for(let i=0; i < list.length; i++){
    indexlist[i] = list[i];
}
for(let i=0; i < list.length; i++){
    var num = list[i].id.match(/\d+/g);
    console.log(Number(num));
}


    document.getElementById("kuvat").style.animation ="moveimages 2s linear infinite";
    for(let i=0; i < list.length; i++){
        var num = list[i].id.match(/\d+/g);

        if(Number(num) == 16){
            list[i].id = "img0";
        }
        else if(Number(num) == 17){
            list[i].id = "img1";
        }
        else if(Number(num) == 18){
            list[i].id = "img2";
        }
        else{
            list[i].id = "img" + (Number(num)+2).toString();
        }
    }

setInterval(function(){
        for(let i=0; i < list.length; i++){
            var num = list[i].id.match(/\d+/g);

            if(Number(num) == 16){
                list[i].id = "img0";
            }
            else if(Number(num) == 17){
                list[i].id = "img1";
            }
            else if(Number(num) == 18){
                list[i].id = "img2";
            }
            else{
                list[i].id = "img" + (Number(num)+2).toString();
            }
        }
    }, 2000);

function moveImages(){

    //let list = indexlist;

    for(let i=0; i < list.length; i++){
        var num = list[i].id.match(/\d+/g);
        Number(num);
        list[i].id = "img" + (Number(num)+1).toString();
        console.log((Number(num)+1).toString());
    }
}*/

const pic0 = document.getElementById("someimg0");
const pic1 = document.getElementById("someimg1");
const pic2 = document.getElementById("someimg2");

pic0.classList.add("someimg0");
pic1.classList.add("someimg1");
pic2.classList.add("someimg2");

let list = [pic0, pic1, pic2];

document.getElementById("btn0").onclick = function() {

    let _list = [ , ,]

    _list[0] = list[1];
    _list[1] = list[2];
    _list[2] = list[0];

    list = _list;

    for(i=0;i<3;i++){
        for(x=0;x<3;x++){
            list[i].classList.remove("someimg"+x);
        }
    }

    list[0].classList.add("someimg0");
    list[0].style.zIndex=1;
    list[1].classList.add("someimg1");
    list[1].style.zIndex=2;
    list[2].classList.add("someimg2");
    list[2].style.zIndex=0;

}
document.getElementById("btn1").onclick = function() {

    let _list = [ , ,]

    _list[0] = list[2];
    _list[1] = list[0];
    _list[2] = list[1];

    list = _list;

    for(i=0;i<3;i++){
        for(x=0;x<3;x++){
            list[i].classList.remove("someimg"+x);
        }
    }

    list[0].classList.add("someimg0");
    list[0].style.zIndex=0;
    list[1].classList.add("someimg1");
    list[1].style.zIndex=2;
    list[2].classList.add("someimg2");
    list[2].style.zIndex=1;

}


const selectionImg0 = document.getElementById("selectimg0");
const selectionImg1 = document.getElementById("selectimg1");
const selectionImg2 = document.getElementById("selectimg2");
const selectionImg3 = document.getElementById("selectimg3");

const selectionImgList = [selectionImg0, selectionImg1, selectionImg2, selectionImg3];


selectionImg0.addEventListener("mouseover", event => {
    for(i=1;i<4; i++){
        selectionImgList[i].classList.add("blurAndGrayScale");
    }
});
selectionImg0.addEventListener("mouseout", event => {
    for(i=1;i<4; i++){
        selectionImgList[i].classList.remove("blurAndGrayScale");
    }
});
selectionImg1.addEventListener("mouseover", event => {
    selectionImgList[0].classList.add("blurAndGrayScale");
    for(i=2;i<4; i++){
        selectionImgList[i].classList.add("blurAndGrayScale");
    }
});
selectionImg1.addEventListener("mouseout", event => {
    selectionImgList[0].classList.remove("blurAndGrayScale");
    for(i=2;i<4; i++){
        selectionImgList[i].classList.remove("blurAndGrayScale");
    }
});
selectionImg2.addEventListener("mouseover", event => {
    selectionImgList[0].classList.add("blurAndGrayScale");
    selectionImgList[1].classList.add("blurAndGrayScale");
    selectionImgList[3].classList.add("blurAndGrayScale"); 
});
selectionImg2.addEventListener("mouseout", event => {
    selectionImgList[0].classList.remove("blurAndGrayScale");
    selectionImgList[1].classList.remove("blurAndGrayScale");
    selectionImgList[3].classList.remove("blurAndGrayScale");
});
selectionImg3.addEventListener("mouseover", event => {
    for(i=0;i<3; i++){
        selectionImgList[i].classList.add("blurAndGrayScale");
    }
});
selectionImg3.addEventListener("mouseout", event => {
    for(i=0;i<3; i++){
        selectionImgList[i].classList.remove("blurAndGrayScale");
    }
});

const menu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



