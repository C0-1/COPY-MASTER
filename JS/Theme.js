const themeText = document.getElementById("theme");
    themeText.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            themeText.src = "./ASSETS/LOGO/Moon.svg";
        }else{
            themeText.src = "./ASSETS/LOGO/Sun.svg";
        }
    }
