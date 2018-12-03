var Restaurant  = require('./Restaurant/Restaurant'),
    funcs       = require('./Restaurant/Messages'),
    express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 8080,
    router      = express.Router(),
    Restaurant  = new Restaurant();

app.get('/', (req,res) =>{

    //Adding customers:
    Restaurant.addCustomer(2);  
    Restaurant.addCustomer(3);
    Restaurant.addCustomer(4);
    Restaurant.addCustomer(5);
    Restaurant.addCustomer(2);
    Restaurant.addCustomer(4);
    Restaurant.addCustomer(7);
    Restaurant.addCustomer(2);
    Restaurant.addCustomer(4);
    Restaurant.addCustomer(3);
    Restaurant.addCustomer(5);


    //Customer getting into the Restaurant and remove it from the line:
    Restaurant.enterCustomer();

    //Customer left the line:
    Restaurant.removeCustomer(4);

    //Getting all the customers in line:
    Restaurant.getAll();

    //Empty the line
    Restaurant.emptyAll();

    //Showing it's not passable to accept customer from an empty line
    Restaurant.enterCustomer();

    res.json(Restaurant.message);

    Restaurant.restart();
    
});

app.listen(port,() =>{
    console.log('Runing on PORT: ' + port);
})


Restaurant.on("Customer", funcs.peopleInline)  
        .on("Full", funcs.lineFull)
        .on("Empty", funcs.emptyLine)
        .on("Enter", funcs.enterCustomer)
        .on("Remove", funcs.removeCustomer)
        .on("GetAll", funcs.getAll);





