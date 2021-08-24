var i = 1;

function slide(){
    var a = ["./assest/image/package-3.jpg","./assest/image/parallax-4.jpg","./assest/image/parallax-4-1.jpg"];
        document.getElementById("imgs").src = a[i];
        i++;

        if(i == 3){
            i = 0;
        }
}

setInterval(slide,4000);
function changeimg1(){
    document.getElementById('imgs').src = "./assest/image/package-3.jpg";
    document.getElementById('imgs1').style.backgroundColor = "#fff";
}
function changeimg2(){
    document.getElementById('imgs').src = "./assest/image/parallax-4.jpg";
    document.getElementById('imgs2').style.backgroundColor = "#fff";
}
function changeimg3(){
    document.getElementById('imgs').src = "./assest/image/parallax-4-1.jpg";
    document.getElementById('imgs3').style.backgroundColor = "#fff";
}