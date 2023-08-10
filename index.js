// Carros cadastrados:

const cars = [];



// Menu inicial do CRUD de Carros: 

let exitMenu = true;

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
        case 1:
            newCar();
            break;

        case 2:
            listCars();
            break;

        case 3:
            filterCar();
            break;

        case 4:
            updateCar();
            break;

        case 5:
            removeCar();
            break;

        case 6:
            exitCrud();
            break;

        default:
            break;
    }





} while (exitMenu)


// Função para adicionar novo carro.

function newCar() {
    const car = {
        id: cars.length + 1,
        modelo: "Civic",
        marca: "Honda",
        ano: 2020,
        cor: "Preto",
        preco: 43000
    }
    cars.push(car);
    alert(`Carro ${car.marca} ${car.modelo} cadastrado com sucesso!`);

}

// Função para listar os carros:

function listCars() {
    cars.sort(function (a, b) {

        if (a.preco < b.preco)
            return -1;
    });

    cars.forEach(carro => alert(`ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preco: ${carro.preco}`))

}

// Função para filtrar veiculos por marca:

function filterCar() {
    const marca = prompt('Informe a marca do veículo que você deseja pesquisar: ');
    const findCar = cars.filter(car => car.marca.includes(marca));

    if (findCar.length === 0) {
        alert(`Marca ${marca} não localizada em nossos bancos de dados!`);
    }
    findCar.sort(function (a, b) {

        if (a.preco < b.preco)
            return -1;
    });

    findCar.forEach(carros => alert(`ID: ${carros.id} | Modelo: ${carros.modelo} | Cor: ${carros.cor} | Preco: ${carros.preco}.`))

};

// Atualizar veículo:

function updateCar() {
    const identify = Number(prompt('Informe o identificador do veículo:'));
    const findCar = carros.findIndex(carro => carro.id === identify);
    if (findCar === -1) {
        alert('Veículo, não encontrado! Favor voltar para o menu inicial!');
    } else {

        const newColor = prompt('Informe a nova cor do veículo:');
        if (newColor) {
            cars[findCar].cor = newColor;
        }
        const newPrice = Number(prompt('Informe o novo preço do veiculo:'));

        cars[findCar].preco = newPrice;

        alert(`Veículo ${cars[findCar].modelo} atualizado com sucesso!`)

    }
}


// Função para remover veículo:

function removeCar() {
    const identify = Number(prompt('Informe o identificador do veículo:'));
    const findCar = cars.findIndex(carro => carro.id === identify);
    if (findCar === -1) {
        alert('Veículo, não encontrado! Favor voltar para o menu inicial!');
    } else {
        cars.splice(findCar, 1);
        alert(`Veículo ${cars[findCar].modelo} excluido com sucesso!`)
    }
}

// Função para sair do sistema:

function exitCrud() {
    const exit = confirm('Deseja realmente sair do sistema?');
    if (exit) {
        alert('Obrigado pela preferência.');
        exitMenu = false;
    }

}
