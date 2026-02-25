let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function processarNotasAtletas(objAtletas) {
  // 1. Laço for para percorrer cada atleta
  for (let i = 0; i < objAtletas.length; i++) {
    let atleta = objAtletas[i];
    
    // 2. Ordenar as notas em ordem crescente
    // Importante: usamos uma função de comparação (a, b) para garantir a ordem numérica
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
    
    // 3. Eliminar a maior e a menor nota usando slice(1, 4)
    // Isso pega os itens dos índices 1, 2 e 3
    let notasComputadas = notasOrdenadas.slice(1, 4);
    
    // 4. Calcular a soma das notas restantes usando forEach
    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota;
    });
    
    // 5. Calcular a média válida
    let mediaValida = soma / notasComputadas.length;
    
    // 6. Apresentar os resultados no console
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas}`);
    console.log(`Média Válida: ${mediaValida}`);
    console.log(""); // Linha em branco para separar os atletas
  }
}

// Executar a função
processarNotasAtletas(atletas);