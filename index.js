let heroi = "Tempestade"
let Xp = 9001

switch (Xp) {
    case 1000:
        console.log("Se XP for menor do que 1.000 = Ferro")
        break;
    case 1001:
        console.log("Se XP for entre 1.001 e 2.000 = Bronze")    
        break;
    case 2001:
        console.log("Se XP for entre 2.001 e 5.000 = Prata")
        break;
    case 5001:
        console.log("Se XP for entre 5.001 e 7.000 = Ouro")
        break;
    case 7001:
        console.log("Se XP for entre 7.001 e 8.000 = Platina")
        break;
    case 8001:
        console.log("Se XP for entre 8.001 e 9.000 = Ascendente")
        break;
    case 9001:
        console.log("Se XP for entre 9.001 e 10.000 = Imortal")
        break;
    case 10001:
        console.log("Se XP for maior ou igual a 10.001 = Radiante")
        break;
    default:
        break;
}

		console.log("O Herói de nome" + " " + heroi + " " + "está no nível de" + " " + Xp)
