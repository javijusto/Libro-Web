const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

const libro = document.querySelector('.lib');
const hoja = document.querySelector('.hoja');
const lbot = document.querySelector('#arriba');

const subtitle = document.querySelector('.icons');

let language = true;
var idioma = "";
let showLibro = false;
let showHoja = false;

let showMenu = false;
let showS = false;
var i = 0;
var j =0;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//contenido web
var txt = "Libro web con animaciones";
var iconos = document.getElementsByClassName("icons");

var lore1 = "<p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
var lore2 = "<p>&nbsp;&nbsp;&nbsp;&nbsp;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";
var lore3 = "<p>&nbsp;&nbsp;&nbsp;&nbsp;Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>";
var lore4 = "<p>&nbsp;&nbsp;&nbsp;&nbsp;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>";

var capitulo0 = "<h2>Capítulo 0</h2>" + lore1;
var capitulo1 = "<h2>Capítulo 1</h2>" + lore2;
var capitulo2 = "<h2>Capítulo 2</h2>" + lore3;
var capitulo3 = "<h2>Capítulo 3</h2>" + lore4;


var cerra ="<a href='javascript:rmLib();' onmouseover=this.style.color='#eeab1aea' onmouseout=this.style.color='#bbbbbb' style='position:fixed;bottom:30px;right:6%;font-weight:600;font-stretch:condensed;'>Cerrar</a>";

menuBtn.addEventListener('click', toggleMenu); //evento menu

function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}


//titulos
function showTitle(){
    document.getElementById("tit").innerHTML = "<img src='img/titulo.png' width='300rem' height='100%'/>";
    document.getElementById("tit").style.position = "relative";
    document.getElementById("tit").style.bottom = "13rem";
    document.getElementById("sub").style.position = "relative";
    document.getElementById("sub").style.bottom = "13rem";
    document.getElementById("sub").style.fontSize = "120%";
}


function showSub(){
    if(!showS){
        typeWriter();
        showS = true;
        setTimeout(function(){
            subtitle.classList.add('show');
        }, 1000);
    }
}

  function typeWriter() {
    if (j < 4) {
      document.getElementById("sub").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 25);
    }
  }

  //MENU
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu= true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        rmLib();
        showMenu= false;
    }
}

function cerrarMenu(){
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showLibro = false;
    showHoja = false;
    showMenu= false;
}

//DESPLIEGUE DEL LIBRO
lbot.addEventListener('click', showLib);

function showLib(){
    if (!showLibro) {
        libro.classList.add('show');
        showLibro = true;
    } 
}

function rmLib(){
    if(showLibro){
        libro.classList.remove('show');
        showLibro = false;
        hoja.classList.remove('show');
        showHoja= false;
        document.getElementById("sub").style.visibility ="visible";
        document.getElementById("iconosA").style.visibility ="visible";
        document.getElementById("tit").style.transform = "scale(1,1) translate3d(0, 0, 0)";
        document.getElementById("tit").style.transition = "all 1s ease-out";
    }
}

function mouseOverA() {
    document.getElementById("audioimg").src = "img/audiobn.jpg";
}
  
function mouseOutA() {
    document.getElementById("audioimg").src = "img/audio.jpg";
}

function mouseOverV() {
    document.getElementById("visualimg").src = "img/visualbn.jpg";
}
  
function mouseOutV() {
    document.getElementById("visualimg").src = "img/visual.jpg";
}

function showA(ident){
    if(showHoja==false){
        if(showS){
            showS=false;
            document.getElementById("sub").style.visibility ="hidden";
            document.getElementById("iconosA").style.visibility ="hidden";    
            document.getElementById("tit").style.transform = "scale(0.95,0.95) translate3d(-50px, 0, 0)";
            document.getElementById("tit").style.transition = "all 1s ease-out";
        }
        if(!showLibro){
            showLib();    
        }  
        hoja.classList.add('show');
        showHoja=true;
    }
    else{
        hoja.classList.remove('show');
        hoja.classList.add('show');
    }
    if(ident=="about"){
        document.getElementById("about").innerHTML= capitulo0 + cerra;
        document.getElementById("about").style.padding = "15%";
  
    }
    else if(ident=="work"){
        
        document.getElementById("about").innerHTML= capitulo1  + cerra;
        document.getElementById("about").style.padding = "15%";
       
    }
    else if(ident=="audio"){
        
        document.getElementById("about").innerHTML= capitulo2 + cerra;
        document.getElementById("about").style.padding = "15%";
       
    }
    else if(ident=="contact"){
        document.getElementById("about").innerHTML= capitulo3 + cerra;
        document.getElementById("about").style.padding = "15%";
    }
}
