// var data = [{item:'wake up'},{item:'get ready'},{item:'catch the bus'}];
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://chhavi:chhavi123%2A@todo-bkmvy.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item:'get ready'}).save(function(err){
//   if(err) throw err;
//   console.log('item saved');
//
// });
module.exports = function(app){

  app.get('/todo',function(req,res){

   Todo.find({},function(err,data){
     if(err)throw err;
     res.render('todo',{todos:data});
   });
   });

  app.post('/todo',function(req,res){

    var newTodo = Todo(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item',function(req,res){


  Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
    if(err) throw err;
    res.json(data);
  });
   // data = data.filter(function(todo){
   //
   //   return todo.item.replace(/ /g, '-')!== req.params.item;
   });
   // console.log(req.params.item);
   // res.json(data);

};
