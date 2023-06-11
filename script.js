const usuarios = [
  {
      id: 1,
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli2.png',
      nascimento: '1990-01-01'
  },
  {
      id: 2,
      nome: 'Maria Souza',
      email: 'maria@exemplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli1.png',
      nascimento: '1993-05-27'
  },
  {
      id: 3,
      nome: 'José Santos',
      email: 'jose@exemplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli5.png',
      nascimento: '1992-10-10'
  },
  {
      id: 4,
      nome: 'Ana Oliveira',
      email: 'ana@exemplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli3.png',
      nascimento: '1995-12-30'
  },
  {
      id: 5,
      nome: 'Pedro Souza',
      email: 'pedro@exemplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli7.png',
      nascimento: '1991-07-07'
  },
  {
      id: 6,
      nome: 'Paula Santos',
      email: 'paula@exmplo.com',
      foto: 'https://raw.githubusercontent.com/wellifabio/senai2023/main/2des/projetos/assets/avatares/cli4.png',
      nascimento: '1994-03-15'
  }
];

function exibirUsuarios() {
  const listaUsuarios = document.getElementById('lista-usuarios');

  usuarios.forEach((usuario) => {
    const itemUsuario = document.createElement('li');
    itemUsuario.classList.add('user-card');
    itemUsuario.innerHTML = `
      <div class="card">
        <img src="${usuario.foto}" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">${usuario.nome}</h5>
          <p class="card-text">${usuario.email}</p>
          <p class="card-text">${usuario.nascimento}</p>
        </div>
      </div>
    `;
    listaUsuarios.appendChild(itemUsuario);
  });
}

// Chamada da função para exibir os usuários
exibirUsuarios();
