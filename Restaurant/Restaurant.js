var events = require('events');


class Restaurant extends events.EventEmitter{
    constructor(){
        super();
        this.line = [];
        this.message = [];
        this.amount = 0;
        this.CustomerNum = 0;
        this.MAX = 10;
    }
    addCustomer(amount){
        if(this.line.length < this.MAX){
            this.amount = amount; 
            this.line.push(`Table for ${this.amount} people`)
            this.message.push(`Prepering a table for ${this.amount} people`); //Pushing new string to "line"
            this.message.push(`Line length: ${this.line.length} `);
            this.emit('Customer'); //Customer signing the to enter the Restaurant
        }    
        else{
            this.message.push(`Line if full, cannot accept more reservations`);
            this.emit('Full');
        }
    }
    enterCustomer(){
        if(this.line.length > 0){
            this.line.shift();
            this.message.push(`Customer entered the Restaurant`);
            this.message.push(`Line length: ${this.line.length} `);
            this.emit('Enter'); //Customer getting into the Restaurant
        }    
        else{
            this.message.push(`There is no customers in line`);
            this.emit(`Enter`);
        } 
    }

    removeCustomer(numInline){
        if (this.line.length > 0){
            this.CustomerNum = numInline
            this.line.splice(this.CustomerNum,1);
            this.message.push(`Customer number: ${this.CustomerNum} in line went away, line contain ${this.line.length} people who's waiting`);
            this.emit(`Remove`); //Customer reserve a place in line
        }
        else{
            this.message.push(`The line is already empty`);
        }
    }

    getAll(){
        this.message.push(`Getting all the people in line:`);
        for(var i = 0; i < this.line.length; i++){
            this.message.push(`Order number: ${i + 1}, ${this.line[i]}`); //Printing the people in line
        }
        this.emit(`GetAll`);
    }

    emptyAll(){
        this.line.splice(0,this.line.length);
        this.message.push(`Emptying the line`);
        this.amount = 0;
        this.CustomerNum = 0;
        this.emit(`Empty`); //Take out all the people in line
    }

    restart(){
        this.message.splice(0,this.message.length);
        this.line.splice(0,this.line.length); //Restarting the Restaurant 
        this.amount = 0;
        this.CustomerNum = 0;
    }
}

module.exports = Restaurant;



