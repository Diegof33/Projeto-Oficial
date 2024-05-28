window.onload = function() {


  async function fetchAgua() {
    const response = await fetch('http://localhost:8080/agua/list-agua');
    const aguaList = await response.json();
    const tabelaAgua = document.getElementById('tabelaAgua');
    const aguaListElement = document.getElementById('aguaList');
    tabelaAgua.innerHTML = '<tr><th>Horário</th><th>Quantidade de Água (ml)</th></tr>';
    aguaListElement.innerHTML = '';
    aguaList.forEach(agua => {
        let row = tabelaAgua.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = agua.horarioAgua;
        cell2.textContent = `${agua.quantidadeAgua} ml`;
        
        let item = document.createElement('li');
        item.textContent = `Horário: ${agua.horarioAgua}, Quantidade: ${agua.quantidadeAgua}L`;
        aguaListElement.appendChild(item);
    });
}

fetchAgua();

async function fetchAlimentacao() {
    const response = await fetch('http://localhost:8080/alimentacao/list-alimentacao');
    const alimentacaoList = await response.json();
    const alimentacaoListElement = document.getElementById('alimentacaoList');
    alimentacaoListElement.innerHTML = '';

    alimentacaoList.forEach(alimentacao => {
        let row = document.createElement('tr');

        let dataCell = document.createElement('td');
        dataCell.textContent = alimentacao.data;
        row.appendChild(dataCell);

        let horarioCell = document.createElement('td');
        horarioCell.textContent = alimentacao.horarioAlimentacao;
        row.appendChild(horarioCell);

        let refeicaoCell = document.createElement('td');
        refeicaoCell.textContent = alimentacao.tipoAlimento;
        row.appendChild(refeicaoCell);

        let caloriasCell = document.createElement('td');
        caloriasCell.textContent = alimentacao.quantidadeCalorias;
        row.appendChild(caloriasCell);

        alimentacaoListElement.appendChild(row);
    });
}

fetchAlimentacao();


async function fetchSono() {
    const response = await fetch('http://localhost:8080/sono/list-sono');
    const sonoList = await response.json();
    const sonoListElement = document.getElementById('sonoList');
    sonoListElement.innerHTML = '';
    sonoList.forEach(sono => {
        let row = document.createElement('tr');
        
        let dataCell = document.createElement('td');
        dataCell.appendChild(document.createTextNode(sono.data));
        row.appendChild(dataCell);
        
        let horasSonoCell = document.createElement('td');
        horasSonoCell.appendChild(document.createTextNode(sono.horasSono));
        row.appendChild(horasSonoCell);
        
        let qualidadeCell = document.createElement('td');
        qualidadeCell.appendChild(document.createTextNode(sono.qualidade));
        row.appendChild(qualidadeCell);

        sonoListElement.appendChild(row);
    });
}

fetchSono();

async function fetchAtividade() {
    try {
        const response = await fetch('http://localhost:8080/atividade/list-atividade');
        const atividadeList = await response.json();
        const atividadeListElement = document.getElementById('atividadeList');
        atividadeListElement.innerHTML = ''; // Clear existing data

        atividadeList.forEach(atividade => {
            let row = document.createElement('tr');

            let cellTipoAtividade = document.createElement('td');
            cellTipoAtividade.textContent = atividade.tipoAtividade;
            row.appendChild(cellTipoAtividade);

            let cellDistancia = document.createElement('td');
            cellDistancia.textContent = atividade.distanciaKm;
            row.appendChild(cellDistancia);

            let cellDuracao = document.createElement('td');
            cellDuracao.textContent = atividade.duracaoMinutos;
            row.appendChild(cellDuracao);

            atividadeListElement.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching atividade data:', error);
    }
}

fetchAtividade();

}
