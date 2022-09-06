const navBar = ["Youtube " , "Faceboock" ,"Google" , "Twitter"];
const links = ["https://www.youtube.com/" , "https://www.facebook.com/" , "https://www.google.com/" ,"https://twitter.com/home"]
let list = "<ul>";

    for(let i = 0; i < navBar.length; i++){
        list += '<li><a href="' + links[i] + '"target="_blank">'  + navBar [i]+ '</a></li>';
    }

document.getElementById("nav-bar").innerHTML = list;
console.log(list);

list = "</ul>";

