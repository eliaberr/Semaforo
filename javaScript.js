

function ligarSemafaro(){

    if(document.getElementById("yellow").className === "light yellow"){
        document.getElementById("red").className="light red";
        document.getElementById("yellow").className="light desligado";
    } else{
        if(document.getElementById("red").className === "light red"){
            document.getElementById("green").className="light green";
            document.getElementById("red").className="light desligado";
        }else{
            document.getElementById("yellow").className="light yellow";
            document.getElementById("green").className="light desligado";         
        }
    }


}