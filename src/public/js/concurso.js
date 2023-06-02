window.onload = function () {
    let content = document.getElementById('content');
    let main = document.getElementById('main');
    let header = document.getElementById('header');
    let height = main.offsetHeight - header.offsetHeight;
    console.log(height);
    console.log(content.offsetHeight)
    content.style.height = `${height}px !important`;
    console.log(content.offsetHeight)
}