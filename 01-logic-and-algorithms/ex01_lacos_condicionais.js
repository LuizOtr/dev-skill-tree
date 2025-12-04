const frutas = ["Maça","Banana","Uva","Laranja","Abacate","Péra","Melancia","Graviaola"]
const idades = [15, 22, 12, 18, 30, 11, 17, 25, 14, 40]
//console.log(typeof(frutas))
//console.log(typeof(idades))


function listHortifruti(prat){
    for (let i = 0; i < prat.length; i++) {
    let frutaAtual = prat[i];

        if (frutaAtual.length > 5 ){
            console.log(`A estante ${i} tem espaço para a ${frutaAtual}`)
        }
    }
}

listHortifruti(frutas)

/*
Você recebeu uma lista bruta de idades de usuários que tentaram se cadastrar no sistema. 
Sua missão é separar esses dados em duas "caixas" (arrays)
diferentes: uma para quem é maior de idade (aprovados) e outra para quem é menor de idade (reprovados).
*/

function listRegister(ages){
    const approved = []
    const rejected = []
        for (let i = 0; i < ages.length; i++) {
            let current = ages[i];
                if (current >= 18){
                    approved.push(current)
                }
                else
                    rejected.push(current)
        }
    return {Maiores_de_idade: approved, Menores_de_idade: rejected}
}
listRegister(idades)
console.log(listRegister(idades))