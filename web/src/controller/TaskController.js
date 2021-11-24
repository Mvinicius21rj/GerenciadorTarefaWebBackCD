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
       async update(req, res){
                        
              await TaskModel
             .findByIdAndUpdate({'_id':req.params.id}, req.body,{new: true})
             .then(response => {return res.status(200).json(response)})
             .catch(response => {return res.status(500).json(response)});
             
       }
       async readAll(req, res){
                        
              await TaskModel
             .find({macAdress: {'$in':req.body.macAdress}})
             .sort('when')
             .then(response => {return res.status(200).json(response)})
             .catch(response => {return res.status(500).json(response)});
             
       }
       async readById(req, res){
                        
              await TaskModel
             .findById(req.params.id)
             .then(response => {
                    if(response)
                            return res.status(200).json(response)
                    else
                    return res.status(404).json({error : 'Tarefa não encontrada'})
              })

             .catch(response => {return res.status(500).json(response)});
             
       }
       async delete(req, res){
                        
              await TaskModel
             .deleteOne({'_id':req.params.id})
             .then(response => {return res.status(200).json(response)})
             .catch(response => {return res.status(500).json(response)});
             
       }
}

module.exports = new TaskController();
