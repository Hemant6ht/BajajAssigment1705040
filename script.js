var x=0
var launch=document.getElementById('launch');
var jet=document.getElementById('jet');
var count=document.getElementById('number');
var success=document.getElementById('launchsuccess');
launch.addEventListener('click',function(){
    jet.classList.add("jetanimate");
    launch.disabled=true;
    setTimeout( function(){
     jet.classList.remove("jetanimate");
     launch.disabled=false;
    },2000);
    x++;
    count.innerText=x;
    if(x==5)
    {
        success.style.visibility="visible";
        launch.disabled=true;
    }
})