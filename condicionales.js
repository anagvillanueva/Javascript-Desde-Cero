// Tipo de mascotas = Gato, Perro, Hamster 

// Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipoDeMascota = "Elefante"; 

if (tipoDeMascota === "Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande.")
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana.")
}else if (tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña.")
}else{ // ELSE es el bloque falso (se ejecuta si no se cumple ninguna de las condiciones anteriores)
    console.log("No contamos con jaulas para esa mascota.")
}

// Semaforo color = Rojo, Amarillo, Verde 
// Rojo = Alto, Amarillo = Detente, Verde = Siga