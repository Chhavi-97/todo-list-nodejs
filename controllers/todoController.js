var data = [{item:'wake up'},{item:'get ready'},{item:'catch the bus'}];

module.exports = function(app){

  app.get('/todo',function(req,res){

   res.render('todo',{todos:data});

  });

  app.post('/todo',function(req,res){
   data.push(req.body);
   console.log(req.body);

   res.json(data);
  });

  app.delete('/todo/:item',function(req,res){

   data = data.filter(function(todo){

     return todo.item.replace(/ /g, '-')!== req.params.item;
   });
   console.log(req.params.item);
   res.json(data);

  });
};
