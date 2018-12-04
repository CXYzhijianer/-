//鼠标滑过显示二级导航
window.onload=function(){
    //左边菜单栏划过效果
    document.querySelector("#ul1").style.display="none";
    document.querySelector("#ul2").style.display="none";
    document.querySelector("#ul3").style.display="none";
    document.querySelector("#ul4").style.display="none";
    let lilist=document.querySelectorAll(".lis");
    let ullist=document.querySelectorAll(".uls");
    for (let i=0;i<ullist.length;i++){
        lilist[i].onmouseenter=function(){
            ullist[i].style.display="block";
        }
        lilist[i].onmouseleave=function(){
            ullist[i].style.display="none";
        }
    }
    // menu_cont的划过
    let menu= document.querySelector("#personal_menu");
    let menu_cont= document.querySelector("#menu_cont")
    menu.style.display="none"
    menu_cont.onmouseenter=function(){

        menu.style.display="block"
    }
    menu_cont.onmouseleave=function(){
        setTimeout(()=>{
            menu.style.display="none"
        },5000)

    }
    //........................inbox页面的滑效果.......................

}