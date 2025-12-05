const { listaDeItens, listaDeUsuarios } = require('./dadosMock.js');

/*
Percorra a lista de usuários (listaDeUsuarios)
e mostre no console uma frase para cada um:
"O usuário [NOME] tem [IDADE] anos e mora em [CIDADE].
*/
console.log("*".repeat(50));
for (const user of listaDeUsuarios){
    console.log(`O usuário ${user.nome} tem ${user.idade} anos e mora em ${user.cidade}`)
}
/*
A empresa quer fazer uma campanha apenas para quem mora na região Nordeste (ou um estado específico).
Percorra a lista de usuários e mostre o nome apenas de quem mora no estado "CE" (Ceará) ou "BA" (Bahia)
*/
console.log("*".repeat(50));
for (const user of listaDeUsuarios){
    if (user.estado === "CE" || user.estado === "BA")
        console.log(`O usuário ${user.nome} mora no estado de ${user.estado}`)
}

/*
O RH quer saber quantos funcionários são do signo de "Sagitário"
*/
console.log("*".repeat(50));
contSigno = 0
for (const user of listaDeUsuarios){
    if (user.signo === "Sagitário")
        contSigno++;
}
console.log(`O RH encontrou ${contSigno} colaboradores de Sagitário.`)


/*
Calcule o valor total de todo o estoque da loja (listaDeItens). Some o campo valor de todos os itens
*/
console.log("*".repeat(50));
let valorTotal = 0
for (const item of listaDeItens){
    const valorItem = parseFloat(item.valor)
    valorTotal = valorTotal + valorItem;
}
console.log(`O valor total é de ${valorTotal.toFixed(2)}`)


/*
O sistema precisa de uma lista de e-mails para enviar uma promoção de seguro de vida.
Crie um novo array chamado emailsPromo.
Adicione nele (usando .push()) o e-mail dos usuários que cumpram TODAS estas regras:

1. Idade maior que 30 anos.
2. Tipo sanguíneo seja "O-" OU "AB+".
3. O estado NÃO seja "MG".

No final, mostre: "E-mails selecionados: [lista de emails]"
*/

console.log("*".repeat(50));


const emailsPromo = []
//const debug = []
for (const user of listaDeUsuarios){
    if (user.idade > 30 && ( user.tipo_sanguineo === "O-"|| user.tipo_sanguineo === "AB+") && user.estado !== "MG")
        emailsPromo.push(user.email)
}
console.log(`E-mails selecionados: ${emailsPromo}`)
console.table(emailsPromo)