const porta = 8800
const url = `http://localhost:${porta}/quack`;
const urlPost = `http://localhost:${porta}/criarQuack`
const quack = "quack"
async function getQuackAlunos(){
    try{
        const response = await axios.get(url, {
            headers: {
                quack
            }
        });
        const lista = response.data;
        console.log(response.data)
        for (const quackAluno of lista) {
            const nomeAluno = document.getElementById(`aluno${quackAluno.id}`);
            const av1 = document.getElementById(`aluno${quackAluno.id}-nota1`);
            const av2 = document.getElementById(`aluno${quackAluno.id}-nota2`);
            const av3 = document.getElementById(`aluno${quackAluno.id}-nota3`);
            console.log(quackAluno.nome)
            nomeAluno.textContent = quackAluno.nome;
            av1.textContent = quackAluno.av1;
            av2.textContent = quackAluno.av2;
            av3.textContent = quackAluno.av3;
        }
    }catch(error){
        console.log(error);
    }
}

async function postQuackAluno(aluno){
    try{
        const response = await axios.post(url, aluno, {
            headers: {
                quack
            }
        });
    }catch(error){
        console.log(error);
    }
}



const aluno1 = {
    nome: "Jamile",
    av1: 10,
    av2: 10,
    av3: 10
}
const aluno2 = {
    nome: "Moguez",
    av1: 1,
    av2: 2,
    av3: 3
}
const aluno3 = {
    nome: "Lion",
    av1: 10,
    av2: 8,
    av3: 9
}

const aluno4 = {
    nome: "Dog",
    av1: 10,
    av2: 10,
    av3: 10
}

const aluno5 = {
    nome: "Rod",
    av1: 10,
    av2: 10,
    av3: 10
}

postQuackAluno(aluno1);
postQuackAluno(aluno2);
postQuackAluno(aluno3);
postQuackAluno(aluno4);
postQuackAluno(aluno5);
getQuackAlunos();