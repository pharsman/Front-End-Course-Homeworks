function mouseOut() {
    if(document.getElementById('donation').style.display === 'block'){
        document.getElementById('donation').style.display = 'none'
    }else{
        document.getElementById('donation').style.display='block'
    }    
}

const navBar = ["წარმოშობა " , "სამყაროები" ,"ღმერთები" , "რაგნაროკი"];
const links = ["genesis.html" , "reamls.html" , "gods.html" ,"ragnarok.html"]
let list = "<ul>";
let navLength = navBar.length
    for(let i = 0; i < navLength; i++){
        list += '<li><a href=' + links[i] + ">"  + navBar [i]+ '</a></li>'
    }

document.getElementById("nav-bar").innerHTML = list;

list = "</ul>";

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById('button').style.display = 'none';
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('button').style.display = 'block';
}


var mybutton = document.getElementById("scroll");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}