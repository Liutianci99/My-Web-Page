let appearence=true;
const sidebaricon=document.getElementById("sidebaricon");


document.getElementById("sidebarbutton").addEventListener("click",function(){
    if(appearence){
        document.getElementById("sidebar").classList.remove("closed");
        document.getElementById("sidebar").classList.add("open");
        sidebaricon.classList.add('sidebariconrotated');
        appearence= false;
    }else{
        document.getElementById("sidebar").classList.remove("open");
        document.getElementById("sidebar").classList.add("closed");
        appearence=true;
        sidebaricon.classList.remove('sidebariconrotated');
    }
})
