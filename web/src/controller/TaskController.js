const { response } = require('express');
const TaskModel = require('../model/TaskModel');

//A controller faz o tráfego, recenbendo e enviando respostas
class TaskController{
       async create(req, res){
              //recebe a requisição do front
              const task = new TaskModel(req.body);
              //salva no banco de dados
             await task
             .save()
             .then(response => {return res.status(200).json(response)})
             .catch(response => {return res.status(500).json(response)});

              // save() => método utilizado para salvar os dados que vem do front no banco de dados
              //then() => resposta positiva, caso o salvamento for bem sucedido
              //catch () => tratamento de erro, caso for mal sucedido

       }
       
}

module.exports = new TaskController();
