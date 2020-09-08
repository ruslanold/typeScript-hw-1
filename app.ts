
interface Ideputy {
    name: string,
    age: number,
    money: number
}

interface Ifraction {
    name: string,
    deputies: Ideputy[]
}

class Parlament {
    fractions: Ifraction[];
    constructor() {
        this.fractions = [];
    }

    add(fraction: Ifraction) {
        this.fractions.push(fraction)
        return this.fractions[this.fractions.length - 1]
    }

    delete(fractionName: string) {
        let index = this.fractions.findIndex(el => el.name == fractionName)
        if (index > -1) this.fractions.splice(index, 1)
    }

    get(fractionName: string) {
        let index = this.fractions.findIndex(el => el.name == fractionName)
        if (index > -1) {
            console.log(this.fractions[index])
            return this.fractions[index]
        }
    }
    getCorrupt() {
        let bigСorruptsInFractions: Ideputy[] = this.fractions.reduce((acc, el, i) => {
            let bigСorrupt = el.deputies.sort((a, b) => {
                if(a.money < b.money) return 1
            });
            acc.push(bigСorrupt[0]);
            return acc
        }, [])
        let bigСorrupt = bigСorruptsInFractions.sort((a, b) => {
            if(a.money < b.money) return 1
        })
        console.log(bigСorrupt[0]);
    }
    getAll() {
        this.fractions.forEach(el => console.log(el))
    }

}

class Fraction {
    name: string;
    deputies: Ideputy[];
    constructor(name: string) {
        this.name = name
        this.deputies = []
    }

    add(deputy: Ideputy) {
        this.deputies.push(deputy)
    }

    delete(deputyName: string) {
        let index = this.deputies.findIndex(el => el.name == deputyName)
        if (index > -1) this.deputies.splice(index, 1)
    }

    get(deputyName) {
        let index = this.deputies.findIndex(el => el.name == deputyName)
        if (index > -1) {
            console.log(this.deputies[index])
        }
    }

    getCorrupt() {
        let bigСorrupt = this.deputies.sort((a, b) => a.money + b.money)
        console.log(bigСorrupt[0]);
    }

    getAll() {
        this.deputies.forEach(el => console.log(el))
    }
}

enum Eactions {
    ADD = "0",
    DELETE = "1",
    GET = "2"
}

interface Iclass {
    name?: string
    get: Function,
    getCorrupt: Function,
    getAll: Function,
    add: Function,
    delete: Function
}


function wraper(obj: Iclass, method: string){

    let fraction;

    switch (method) {
        case Eactions.ADD:
            console.log("ADD")
            let nameAdd = prompt("Name")
            let object = obj.name
                ? { name: nameAdd, age: Math.floor(Math.random() * 30 + 30), money: Math.floor(Math.random() * 30 + 30) }
                : new Fraction(nameAdd)
            fraction = obj.add(object)
            break;
        case Eactions.DELETE:
            console.log("DELETE")
            let nameDelete: string = prompt("Name")
            obj.delete(nameDelete)
            break;
        case Eactions.GET:
            console.log("GET")
            let whatGet: string = prompt(`
            Выберите действие
            0 - Вывести все 
            1 - Вывести по имени
            2 - Вывести корупционого корупционера
            `)
            switch (whatGet) {
                case "0":
                    obj.getAll()
                    break;
                case "1":
                    let nameGet: string = prompt("Name")
                    fraction = obj.get(nameGet)
                    break;
                case "2":
                    obj.getCorrupt()
                    break;

            }
            break;

        default:
            console.log("Incorect comand")
            break;
    }

    return fraction
}

let parlament_ = new Parlament()
let es = new Fraction("es")
parlament_.add(es)
let fraction_ = es;
do {
    let promt_: string = prompt(`
    Выберите действие 
    0-Верховна Рада 
    1-Фракция
    `)
    switch (promt_) {
        case "0":
            let actionParlament: string = prompt(`
            Выберите действие
            0 - Добавить фракцию
            1 - Удалить Фракцию
            2 - Вывести Фракцию
            `)
            fraction_ = wraper(parlament_, actionParlament) || fraction_ || es
            break;
        case "1":
            let actionFraction: string = prompt(`
            Выберите действие 
            0-Добавить депутата
            1-Удалить депутата 
            2-Вывести депутата
            `)
            wraper(fraction_, actionFraction)
            break;
    }

} while (true);