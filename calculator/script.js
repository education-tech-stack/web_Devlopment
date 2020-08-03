function getValue(){
    return document.getElementById("text_area").value;
}
function textArea(valueOf) {
    document.getElementById("text_area").value=getValue()+valueOf;
}
function compute(){
    document.getElementById("text_area").value=eval(getValue());
}
function clear1(){
    document.getElementById("text_area").value=getValue().substring(0,getValue().length-1);
}
function allClear(){
    document.getElementById("text_area").value='';
}
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        compute();
        e.preventDefault();
    }
}, false);
