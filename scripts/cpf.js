var btnV = document.getElementById('btn_verificar');
var btnG = document.getElementById('btn_gerar');

btnV.addEventListener('click', btnVlistener);
btnG.addEventListener('click', btnGlistener);

function btnGlistener(event) {
	event.preventDefault();
	var newcpf = geraCpf();
	var input = document.getElementById('cpf'); 
	input.value = newcpf;
	
}


function btnVlistener(event){

	event.preventDefault();

	var cpf = document.getElementById('cpf').value;
	var output = document.getElementById('output');

	var isValid = verificaCPF(cpf);

	if (isValid){
		output.innerHTML = `CPF ${cpf} Válido`;
		output.setAttribute("class", "w3-panel w3-green");

	} else {
		output.innerHTML = `CPF ${cpf} Inválido`;
		output.setAttribute("class", "w3-panel w3-red");
	}

	output.style.padding = "10px";
}

function verificaCPF(cpf) {

	var dv1 = calculaDV1(cpf);
	var dv2 = calculaDV2(cpf);
	if(dv1 == cpf[9] && dv2==cpf[10]){
		return true;
	}else{
		return false;
	}
}

function calculaDV1(cpf) {
	var pesos = [10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(let i = 0; i<9;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}
function calculaDV2(cpf) {
	var pesos = [11,10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(let i = 0; i<10;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}

function geraCpf(){
	var cpf = '';

	for (var i = 0; i < 9; i++) {
		cpf = cpf + String(Math.trunc(Math.random() * 10));
	}

	cpf = cpf + String(calculaDV1(cpf));
	cpf = cpf + String(calculaDV2(cpf));

	return cpf;

}