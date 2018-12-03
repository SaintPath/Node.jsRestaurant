//////////////////////////////////
//Managing prints to the console//
//////////////////////////////////


module.exports.peopleInline = function peopleInline(amount){
    if(this.line.length < this.MAX){ 
        console.log(`Prepering a table for ${this.amount} people`);
        console.log(`Line length: ${this.line.length} `); //Homw many people in line
    }else
        console.log(`Line if full, cannot accept more reservations`);
}

module.exports.lineFull = function lineFull(){
    if(this.line.length > this.MAX)
        console.log(`Line is FULL!!!, there is :${this.line.length} in line`); //Checking if line is full
}

module.exports.enterCustomer = function enterCustomer(){
    if(this.line.length > 0)
        console.log(`Customer entered the Restaurant`);
    else
        console.log(`There is no customers in line`);
}

module.exports.removeCustomer = function removeCustomer(){
    if (this.line.length > 0)
        console.log(`Customer number: ${this.CustomerNum} in line went away, line contain ${this.line.length} people who's waiting` );
    else
        console.log(`The line is already empty`);
}

module.exports.getAll = function getAll(){
    console.log(`Getting all the people in line:`);
    for(var i = 0; i < this.line.length; i++){
        console.log(`Order number: ${i + 1}, ${this.line[i]}`);  //Printing the people in line
    }
}

module.exports.emptyLine = function emptyLine(){
    console.log(`Emptying the line`);
}




