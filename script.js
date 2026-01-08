   // single-product-java-script
   
   var MainImg = document.getElementById("MainImg");
    var Smallimg = document.getElementsByClassName("smallimg");

    Smallimg[0].onclick = function(){
        MainImg.src = Smallimg[0].src;
    }

    Smallimg[1].onclick = function(){
        MainImg.src = Smallimg[1].src;
    }

    Smallimg[2].onclick = function(){
        MainImg.src = Smallimg[2].src;
    }

    Smallimg[3].onclick = function(){
        MainImg.src = Smallimg[3].src;
    }