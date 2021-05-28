function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("blue", 0, 0, 0, 300);
dibujarLinea("blue", 0, 0, 300, 0);
dibujarLinea("blue", 300, 0, 300, 300);
dibujarLinea("blue", 0, 0, 300, 0);
dibujarLinea("blue", 0, 300, 300, 300);
dibujarLinea("blue", 0, 0, 300, 300);
dibujarLinea("blue", 300, 0, 0, 300);
dibujarLinea("blue", 0, 150, 300, 150);
dibujarLinea("blue", 150, 0, 150, 300);
dibujarLinea("blue", 150, 300, 300, 0);
dibujarLinea("blue", 150, 300, 0, 0);
dibujarLinea("blue", 0, 300, 150, 0);
dibujarLinea("blue", 300, 300, 150, 0);
dibujarLinea("blue", 300, 150, 150, 0);
dibujarLinea("blue", 0, 150, 150, 0);
dibujarLinea("blue", 0, 150, 150, 300);
dibujarLinea("blue", 150, 300, 300, 150);







