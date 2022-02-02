var img = document.getElementById("imagenMobil");
var e=0;
setInterval(function(){
    var url=["http://127.0.0.1:5500/assets/img/p1.jpg",
             "http://127.0.0.1:5500/assets/img/p2.jpg",
             "http://127.0.0.1:5500/assets/img/p3.jpg",
             "http://127.0.0.1:5500/assets/img/p4.jpg",
             "http://127.0.0.1:5500/assets/img/p5.jpg"]
             img.src=url[e]
            console.log(url[e]);
            if(e<4){
                e++;
            }else{
                e=0;
            }
},5000)