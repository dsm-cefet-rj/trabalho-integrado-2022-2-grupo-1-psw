const example = document.querySelector('.btn');

example.addEventListener('click', function(){
    document.body.classList.toggle()
});

var js_nome;
var js_sobrenome;
var js_nomecompleto;

function concatena( ) {

/* Entrada de Dados */
	js_nome = document.FormConcatena.f_nome.value;
	js_sobrenome = document.FormConcatena.f_sobrenome.value;

/* Processamento de Dados */
	js_nomecompleto = js_nome + ' ' + js_sobrenome;

/* Saída de Dados */
    window.alert('Ol\u00e1 ' + js_nomecompleto);

} 