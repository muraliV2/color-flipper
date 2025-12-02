let body = document.getElementsByTagName("body")[0]

function change(name)
{
    body.style.backgroundColor = name;

}
function random()
{
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    let na =  `rgb(${red},${green},${blue})`
    body.style.backgroundColor = na;

}
