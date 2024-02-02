module.exports = class Food {
    constructor(name) {
        this.name = name
    }
    print() {
        return `-------------------------------\n` +
            `${this.name}:\n` +
            `-------------------------------`
    }
}
