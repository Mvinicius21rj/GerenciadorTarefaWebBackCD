const { response } = require('express');
const TaskModel = require('../model/TaskModel');


const now = new Date();

const {
       startOfDay, 
       endOfDay, 
       startOfWeek, 
       endOfWeek, 
       startOfMonth, 
       endOfMonth, 
       startOfYear, 
       endOfYear
        } = require('date-fns');

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
             .find({macAdress: {'$in':req.params.macAdress}})
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
       async done(req, res){
                        
              await TaskModel
             .findByIdAndUpdate({'_id':req.params.id},{'done':req.params.done},{new:true})
             .then(response => {return res.status(200).json(response)})
             .catch(response => {return res.status(500).json(response)});
             
       }
       async late(req, res){
              await TaskModel
              .find({'when':{'$lt': now}, 'macAdress': {'$in': req.params.macadress} })
              .sort('when')
              .then(response => {return res.status(200).json(response)})
              .catch(error => {return res.status(500).json(error)});
          }
          async today(req, res){
              await TaskModel
              .find({'macAdress': {'$in': req.params.macAdress}, 'when':{'$gte': startOfDay(now), '$lt': endOfDay(now)}})
              .sort('when')
              .then(response => {return res.status(200).json(response)})
              .catch(error => {return res.status(500).json(error)});
          }
      
         
          async week(req, res){
              await TaskModel
              .find({'macAdress': {'$in': req.params.macAdress}, 'when':{'$gte': startOfWeek(now), '$lt': endOfWeek(now)}})
              .sort('when')
              .then(response => {return res.status(200).json(response)})
              .catch(error => {return res.status(500).json(error)});
          }
      
        
          async month(req, res){
              await TaskModel
              .find({'macAdress': {'$in': req.params.macAdress}, 'when':{'$gte': startOfMonth(now), '$lt': endOfMonth(now)}})
              .sort('when')
              .then(response => {return res.status(200).json(response)})
              .catch(error => {return res.status(500).json(error)});
          }
      
        
          async year(req, res){
              await TaskModel
              .find({'macAdress': {'$in': req.params.macAdress}, 'when':{'$gte': startOfYear(now), '$lt': endOfYear(now)}})
              .sort('when')
              .then(response => {return res.status(200).json(response)})
              .catch(error => {return res.status(500).json(error)});
          }
      
      

}

module.exports = new TaskController();
