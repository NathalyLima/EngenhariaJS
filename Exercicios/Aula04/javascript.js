class Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
  }
}

class Professor extends Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes) {
    super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;
  }
}

class Aluno extends Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso) {
    super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
    this.curso = curso;
  }
}

function validarFormulario(event) {
  event.preventDefault();

  // Validações individuais
  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const dataValida = validarDataNascimento();
  const telefoneFixoValido = validarTelefoneFixo();
  const telefoneCelularValido = validarTelefoneCelular();
  const matriculaValida = validarMatricula();

  // Se todos os campos forem válidos
  if (nomeValido && emailValido && dataValida && telefoneFixoValido && telefoneCelularValido && matriculaValida) {
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    const nome = document.getElementById("nome")?.value;
    const email = document.getElementById("email")?.value;
    const dataNascimento = document.getElementById("dataNascimento")?.value;
    const telefoneFixo = document.getElementById("telefoneFixo")?.value;
    const telefoneCelular = document.getElementById("telefoneCelular")?.value;

    if (perfil === 'professor') {
      const matricula = document.getElementById("matriculaProfessor")?.value;
      const areaAtuacao = document.getElementById("areaAtuacao")?.value;
      const lattes = document.getElementById("lattes")?.value;

      if (matricula && areaAtuacao && lattes) {
        const professor = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes);
        console.log('Dados do Professor:', professor);
      } else {
        console.log("Por favor, preencha todos os campos obrigatórios para professor.");
      }
    } else if (perfil === 'aluno') {
      const matricula = document.getElementById("matriculaAluno")?.value;
      const curso = document.getElementById("curso")?.value;

      if (matricula && curso) {
        const aluno = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso);
        console.log('Dados do Aluno:', aluno);
      } else {
        console.log("Por favor, preencha todos os campos obrigatórios para aluno.");
      }
    }
  } else {
    console.log("Formulário inválido.");
  }
}

