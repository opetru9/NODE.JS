module.exports = class Item {
    constructor (name , price , id ){
        this.name  = name
        this.price = {value : price,
                      currency : "USD"}
        this.id    = id 
    }
    print(){
        return `-------------------------------\n`+
            `${this.name}: ${this.price.value}${this.price.currency}\n`+
               `-------------------------------`
    }
}
