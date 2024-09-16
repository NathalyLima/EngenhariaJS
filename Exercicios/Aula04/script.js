document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nome').addEventListener('blur', validarNome);
  document.getElementById('email').addEventListener('blur', validarEmail);
  document.getElementById('dataNascimento').addEventListener('blur', validarDataNascimento);
  document.getElementById('telefoneFixo').addEventListener('blur', validarTelefoneFixo);
  document.getElementById('telefoneCelular').addEventListener('blur', validarTelefoneCelular);
  document.getElementById('areaAtuacao').addEventListener('blur', validarAreaAtuacao);
  document.getElementById('matriculaProfessor').addEventListener('blur', validarMatricula);
  document.getElementById('lattes').addEventListener('blur', validarLattes);
  document.getElementById('curso').addEventListener('blur', validarCurso);
  document.getElementById('matriculaAluno').addEventListener('blur', validarMatricula);
  exibirCamposPerfil('professor');
});

function validarNome() {
  const nome = document.getElementById("nome").value;
  const erroNome = document.getElementById("erroNome");
  const regexNome = /^[A-Za-z]+ [A-Za-z]+$/;
  if (!regexNome.test(nome)) {
    erroNome.textContent = "Por favor, insira nome e sobrenome.";
    return false;
  }
  erroNome.textContent = "";
  return true;
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const erroEmail = document.getElementById("erroEmail");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    erroEmail.textContent = "Email inválido.";
    return false;
  }
  erroEmail.textContent = "";
  return true;
}

function validarDataNascimento() {
  const data = document.getElementById("dataNascimento").value;
  const erroData = document.getElementById("erroData");
  
  if (!data) {
    erroData.textContent = "Data é obrigatória.";
    return false;
  }
  
  erroData.textContent = "";
  return true;
}

function validarTelefoneFixo() {
  const telefone = document.getElementById("telefoneFixo").value;
  const erroTelefoneFixo = document.getElementById("erroTelefoneFixo");
  const regexTelefone = /^\(\d{2}\)\d{4}-\d{4}$/;
  if (!regexTelefone.test(telefone)) {
    erroTelefoneFixo.textContent = "Telefone inválido. Use (xx)xxxx-xxxx.";
    return false;
  }
  erroTelefoneFixo.textContent = "";
  return true;
}

function validarTelefoneCelular() {
  const telefone = document.getElementById("telefoneCelular").value;
  const erroTelefoneCelular = document.getElementById("erroTelefoneCelular");
  const regexTelefone = /^\(\d{2}\)\d{5}-\d{4}$/;
  if (!regexTelefone.test(telefone)) {
    erroTelefoneCelular.textContent = "Celular inválido. Use (xx)xxxxx-xxxx.";
    return false;
  }
  erroTelefoneCelular.textContent = "";
  return true;
}

function validarMatricula() {
  const perfil = document.querySelector('input[name="perfil"]:checked').value;
  const matricula = document.getElementById(perfil === 'professor' ? 'matriculaProfessor' : 'matriculaAluno')?.value;
  const erroMatricula = document.getElementById(perfil === 'professor' ? "erroMatricula" : "erroMatriculaAluno");
  const matriculaProfessor = /^\d{5}$/;
  const matriculaAluno = /^\d{10}$/;

  if (perfil === "professor") {
      if (!matriculaProfessor.test(matricula)) {
          erroMatricula.textContent = "Matrícula inválida para professor. Deve ter 5 dígitos.";
          return false;
      }
  } else if (perfil === "aluno") {
      if (!matriculaAluno.test(matricula)) {
          erroMatricula.textContent = "Matrícula inválida para aluno. Deve ter 10 dígitos.";
          return false;
      }
  } else {
      erroMatricula.textContent = "Perfil não selecionado.";
      return false;
  }

  erroMatricula.textContent = "";
  return true;
}

function exibirCamposPerfil(perfil) {
  if (perfil === 'professor') {
      document.getElementById('camposProfessor').style.display = 'block';
      document.getElementById('camposAluno').style.display = 'none';
  } else if (perfil === 'aluno') {
      document.getElementById('camposProfessor').style.display = 'none';
      document.getElementById('camposAluno').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  exibirCamposPerfil('professor');
});

function validarAreaAtuacao() {
  const areaAtuacao = document.getElementById("areaAtuacao").value;
  const erroAreaAtuacao = document.getElementById("erroAreaAtuacao");
  if (areaAtuacao.trim() === '') {
    erroAreaAtuacao.textContent = "A área de atuação é obrigatória.";
    return false;
  }
  erroAreaAtuacao.textContent = "";
  return true;
}

function validarCurso() {
  const curso = document.getElementById("curso").value;
  const erroCurso = document.getElementById("erroCurso");
  if (curso.trim() === '') {
    erroCurso.textContent = "O curso é obrigatório.";
    return false;
  }
  erroCurso.textContent = "";
  return true;
}

function validarLattes() {
  const lattes = document.getElementById("lattes").value;
  const erroLattes = document.getElementById("erroLattes");
  const regexLattes = /^(https?:\/\/)?(www\.)?lattes\.cnpq\.br\/.*$/;

  if (!regexLattes.test(lattes)) {
    erroLattes.textContent = "URL do Lattes inválido. Deve ser um link válido para o Lattes.";
    return false;
  }
  erroLattes.textContent = "";
  return true;
}

function validarFormulario(event) {
  event.preventDefault();

  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const dataValida = validarDataNascimento();
  const telefoneFixoValido = validarTelefoneFixo();
  const telefoneCelularValido = validarTelefoneCelular();
  const matriculaValida = validarMatricula();

  if (nomeValido && emailValido && dataValida && telefoneFixoValido && telefoneCelularValido && matriculaValida) {
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefoneFixo = document.getElementById("telefoneFixo").value;
    const telefoneCelular = document.getElementById("telefoneCelular").value;
    const matricula = document.getElementById("matricula").value;

    if (perfil === 'professor') {
      const areaAtuacao = document.getElementById("areaAtuacao").value;
      const lattes = document.getElementById("lattes").value;

      if (validarAreaAtuacao()) {
        const professor = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes);
        console.log('Dados do Professor:', professor);
      }
    } else if (perfil === 'aluno') {
      const curso = document.getElementById("curso").value;

      if (validarCurso()) {
        const aluno = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso);
        console.log('Dados do Aluno:', aluno);
      }
    }
  } else {
    console.log("Formulário inválido.");
  }
}
