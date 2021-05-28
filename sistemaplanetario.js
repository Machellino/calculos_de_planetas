var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_kryton = 15.3;
var peso;
var nombre;
var peso_final;

var planeta = parseInt(prompt("Elige tu planeta (Escribe el numero)\n1. Tierra\n2. Marte\n3. Jupiter\n4. Kryton"));

if (planeta == 1)
{
    peso = parseInt(prompt("Ingresa tu peso"));
    nombre = "Tierra";
    peso_final = peso;
    alert("Tu peso en " + nombre + " es " + peso_final + " kilos");
} 
else if (planeta == 2)
{
    peso = parseInt(prompt("Ingresa tu peso"));
    nombre = "Marte";
    peso_final = (g_tierra * peso) / g_marte;
    peso_final = parseInt(peso_final);
    alert("Tu peso en " + nombre + " es " + peso_final + " kilos");
}
else if (planeta == 3)
{
    peso = parseInt(prompt("Ingresa tu peso"));
    nombre = "Jupiter";
    peso_final = (g_tierra * peso) / g_jupiter;
    peso_final = parseInt(peso_final);
    alert("Tu peso en " + nombre + " es " + peso_final + " kilos");

}
else if (planeta == 4)
{
    peso = parseInt(prompt("Ingresa tu peso"));
    nombre = "Kryton";
    peso_final = (g_tierra * peso) / g_kryton;
    peso_final = parseInt(peso_final);
    alert("Tu peso en " + nombre + " es " + peso_final + " kilos");

}
else
{
    alert("Escribe un numero valido");
}




    
