console.log("creating Storage definition");

function Model_Storage(p_name){
    var name = p_name;
    var entries = [];

    this.init = function (){
        console.log(name +" gets created");
    };

    this.add = function (entry){
        entries.push(entry);
    };

    var log = function(logEntry){
        console.log(logEntry);
    };

    this.printOut = function (){
        entries.forEach(log);
    };
}

module.exports = Model_Storage;