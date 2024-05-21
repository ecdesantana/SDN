// Evento de envio do formulário
document.getElementById('crudForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    adicionarItem(name, email);
    
    // Limpar campos do formulário
    document.getElementById('name').value ='';
    document.getElementById('email').value ='';
    });



    let listaclientes = [];

        
    function adicionarItem(name, email) {
    listaClientes.push({ name, email });
    atualizarTabela();

    }



        function atualizarTabela() {
        const tableBody = document.getElementById('tableBody');
        tableBody. innerHTML = '';
        listaclientes.forEach(item => {
        const row = <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteItem('${item.email}')">Excluir</button>
        </td>
        </tr>;
        tableBody. innerHTML += row;
        };