var pacientes = [];

function adicionarPaciente() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if (nome == ""){
        alert("Informe o nome do paciente.")
        inPaciente.focus();

        return;
    }

    pacientes.push(nome);

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

var btnAdicionar = document.getElementById("btAdicionar");
btnAdicionar = addEventListener("click", adicionarPaciente);

function adicionarPaciente() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if (nome == ""){
        alert("Informe o nome do paciente.")
        inPaciente.focus();

        return;
    }

    pacientes.unshift(nome);

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

var btnUrgente = document.getElementById("btUrgente");
btnUrgente = addEventListener("click", atenderUrgente);


function atenderPaciente() {
    if (pacientes.length == 0){
        alert("Não há pacientes em espera.");
        inPaciente.focus();
        return;
    }

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();
    outAtendimento.textContent = atender;

    var lista = "";

    for (i = 0; i < pacientes.length[i]; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}

var btAtender = document.getElementById("dtAtender");
btAtender.addEventListener("click", atenderPaciente);