
let button=document.querySelector(".btn");//button in tagert
button.addEventListener("click",displayDate);//on click event on addEvent
function displayDate()
{
    let tem=Math.floor(Math.random()*4+1);
    
    if(tem==1)
    {
        document.querySelector(".card-img-top").setAttribute("src","./images/gay.jpg");
        document.querySelector(".card-text").innerHTML=" so you are gay... Right?";
    }
    else if(tem==2)
    {
        document.querySelector(".card-img-top").setAttribute("src","./images/male.jpg");
        document.querySelector(".card-text").innerHTML=" so You are Male....";
    }
    else if(tem==3)
    {
        document.querySelector(".card-img-top").setAttribute("src","./images/female.jpg");
         document.querySelector(".card-text").innerHTML=" so you are female... Right?";
    }
    else
    {
         document.querySelector(".card-img-top").setAttribute("src","./images/trans.jpg");
         document.querySelector(".card-text").innerHTML=" so you are transgender... Right?";
    }
}
