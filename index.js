// Carros cadastrados:

const cars = [];



// Menu inicial do CRUD de Carros: 

let continuar = true;

do {

    const menu = Number(prompt(`Bem-vindo ao sistema de CRUD de veículos:
    No momento, o sistema tem ${cars.length} carros cadastrados.
    Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo.
    2 - Listar todos os veículos.
    3 - Filtrar veículos por marca.
    4 - Atualizar veículo.
    5 - Remover veículo.
    6 - Sair do sistema.`))



    switch (menu) {
        case 6:
            continuar = false;
            break;

        default:
            break;
    }





} while (continuar)









/*

let continuar = true;

do {

    let opcao = Number(prompt(`Bem-vindo ao sistema de CRUD de veículos:
    No momento, o sistema tem ${carros.length} carros cadastrados.
    Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo.
    2 - Listar todos os veículos.
    3 - Filtrar veículos por marca.
    4 - Atualizar veículo.
    5 - Remover veículo.
    6 - Sair do sistema.`))


    switch (opcao) {
        case 1:
            newCar();
            break;
        case 2:
            listCar();
            break;
        case 3:

            findCar();
            break;

        case 4:
            updateCar();
            break;

        case 5:
            removeCar();
            break;
        case 6:
            continuar = false;
            break;

        default:
            break;
    }





} while (continuar === true)


// Função para adicionar novo carro

function newCar() {
    const carro = {
        id: carros.length + 1,
        modelo: prompt('Informe o modelo do carro'),
        marca: prompt('Informe a marca do carro'),
        ano: Number(prompt('Informe o ano do carro')),
        cor: prompt('Informe a cor do carro'),
        preco: Number(prompt('Informe o preço do carro')),
    }
    carros.push(carro);
    alert('Carro cadastrado com sucesso');
}

// Listar veículos:

function listCar() {
    carros.sort(function (a, b) {

        if (a.preco < b.preco)
            return -1;
    });

    carros.forEach(carro => alert(`ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preco: ${carro.preco}`))
}

// Filtrar Veiculos por Marca:

function findCar() {
    const marca = prompt('Informe a marca do veículo que você deseja pesquisar: ');
    const filterCar = carros.filter(carro => carro.marca.includes(marca));
    if (filterCar.length === 0) {
        alert(`Marca ${marca} não localizada em nossos bancos de dados!`);
    }
    filterCar.sort(function (a, b) {

        if (a.preco < b.preco)
            return -1;
    });

    filterCar.forEach(carros => alert(`ID: ${carros.id} | Modelo: ${carros.modelo} | Cor: ${carros.cor} | Preco: ${carros.preco}.`))

    // if (marca !== filterCar.marca) {
    //     alert('Marca não encontrada!')

    // }
    //    

}

// Atualizar veiculo

function updateCar() {
    const identify = Number(prompt('Informe o identificador do veículo:'));
    const findCar = carros.findIndex(carro => carro.id === identify);
    if (findCar === -1) {
        alert('Veículo, não encontrado! Favor voltar para o menu inicial!');
    } else {

        const newColor = prompt('Informe a nova cor do veículo:');
        if (newColor) {
            carros[findCar].cor = newColor;
        }
        const newPrice = Number(prompt('Informe o novo preço do veiculo:'));

        carros[findCar].preco = newPrice;

        alert(`Veículo ${carros[findCar].modelo} atualizado com sucesso!`)

    }
}

// Remover veiculo:

function removeCar() {
    const identify = Number(prompt('Informe o identificador do veículo:'));
    const findCar = carros.findIndex(carro => carro.id === identify);
    if (findCar === -1) {
        alert('Veículo, não encontrado! Favor voltar para o menu inicial!');
    } else {
        carros.splice(findCar, 1);
        alert(`Veículo ${carros[findCar].modelo} excluido com sucesso!`)
    }

}

/*

*/


