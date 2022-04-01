
 let tarefas = [];
 let inputDescNovaTarefa = document.getElementById('desc-nova-tarefa');
 let botaoAddTarefa = document.getElementById('add-tarefa');
 let divListaTarefas = document.getElementById('lista-tarefas');

 function renderizarListaTarefas() {
     let tarefasString = '';
     for (let i = 0; i < tarefas.length; i += 1) {
         tarefasString += (i + 1) + '. ' + tarefas[i] + '<br/>';
     }
     divListaTarefas.innerHTML = tarefasString;
 }

 function addTarefa() {
     let descNovaTarefa = inputDescNovaTarefa.value;
     tarefas.push(descNovaTarefa);
     
     renderizarListaTarefas();

     inputDescNovaTarefa.value = '';
 }

 botaoAddTarefa.addEventListener('click', addTarefa);
 inputDescNovaTarefa.addEventListener('keypress', function(event) {
     if (event.key === "Enter") {
         addTarefa();
     }
 });



