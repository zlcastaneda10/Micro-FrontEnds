const express = require('express');
const router = express.Router();
const Task = require('../models/task')
const cors = require('cors')

router.get('/', async (req, res) => {
   const tasks = await Task.find();
   res.json(tasks);
});

router.get('/:id', async (req, res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});
router.post( '/', cors(), async ( req, res) =>{
    const {description, type} = req.body;
    const task = new Task({description,type});
    await task.save(
        function(err, result){
            if(err) 
            {
              response = {"error" : true,"message" : "Error adding data"};
            } 
            else 
            {
                response = {"error" : false,"_id" : result._id};
            }
            res.json(response);
        }
    );
});

router.put('/:id', async (req, res) => {
    const {description, type} = req.body;
    const newTask = {description, type};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task updated'})

});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});



module.exports = router;