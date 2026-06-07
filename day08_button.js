// HTML part
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title>Button</title>
<link rel="stylesheet" href="css/button.css">

</head>
<body>
<button id="btn">0</button>
<script src="js/button.js"></script>
</body>
</html>

// JavaScript part
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let val =  Number(btn.textContent)
    btn.innerHTML = `${val+1}`

})

//Css part
button{
    width : 96px;
    height : 48px;
    font-size : 24px;
}