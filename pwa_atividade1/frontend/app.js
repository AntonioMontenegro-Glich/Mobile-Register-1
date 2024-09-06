const API_URL = 'http://localhost:3000/api/complaints';

document.getElementById('AlunoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('title').value;
    const senha = document.getElementById('message').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, senha })
    });

    const Aluno = await response.json();
    appendAluno(alunos);

    document.getElementById('nome').value = '';
    document.getElementById('senha').value = '';
});

async function loadAluno() {
    const response = await fetch(API_URL);
    const alunos = await response.json();
    alunos.forEach(appendAluno);
}

function appendAluno(Aluno) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${Aluno.nome}</strong>
        <p>${Aluno.senha}</p>
        <button onclick="deleteComplaint('${Aluno._id}')">Deletar</button>
    `;
    document.getElementById('alunosList').appendChild(li);
}

async function deleteAluno(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}
