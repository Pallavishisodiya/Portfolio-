function main1()
{
document.getElementById('main').innerHTML='lorem';
}
function main2()
{
    document.getElementById('main').src="https://demo.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/banner3.jpg";
    document.getElementById('main').style.height='398px';
}
function main3()
{
    document.getElementById('main').src="https://demo.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/banner4.jpg";
    document.getElementById('main').style.height="398px";
}
function main4()
{
    document.getElementById('main').src="https://demo.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/g4.jpg";
    document.getElementById('main').style.height="398px";
}

/*-------------------background theme--------------------------*/

[...document.querySelectorAll(".single-column")].map(column => {
    column.style.setProperty("--animation", "slide");
    column.style.setProperty("height", "200%");
    column.innerHTML = column.innerHTML + column.innerHTML;
  });
