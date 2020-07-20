var text_area;

function textArea(valueOf) {
    text_area=document.getElementById("text_area").value;
    document.getElementById("text_area").value=text_area+valueOf;
}
