var Parlament = /** @class */ (function () {
    function Parlament() {
        this.fractions = [];
    }
    Parlament.prototype.add = function (fraction) {
        this.fractions.push(fraction);
        return this.fractions[this.fractions.length - 1];
    };
    Parlament.prototype["delete"] = function (fractionName) {
        var index = this.fractions.findIndex(function (el) { return el.name == fractionName; });
        if (index > -1)
            this.fractions.splice(index, 1);
    };
    Parlament.prototype.get = function (fractionName) {
        var index = this.fractions.findIndex(function (el) { return el.name == fractionName; });
        if (index > -1) {
            console.log(this.fractions[index]);
            return this.fractions[index];
        }
    };
    Parlament.prototype.getCorrupt = function () {
        var bigСorruptsInFractions = this.fractions.reduce(function (acc, el, i) {
            var bigСorrupt = el.deputies.sort(function (a, b) {
                if (a.money < b.money)
                    return 1;
            });
            acc.push(bigСorrupt[0]);
            return acc;
        }, []);
        var bigСorrupt = bigСorruptsInFractions.sort(function (a, b) {
            if (a.money < b.money)
                return 1;
        });
        console.log(bigСorrupt[0]);
    };
    Parlament.prototype.getAll = function () {
        this.fractions.forEach(function (el) { return console.log(el); });
    };
    return Parlament;
}());
var Fraction = /** @class */ (function () {
    function Fraction(name) {
        this.name = name;
        this.deputies = [];
    }
    Fraction.prototype.add = function (deputy) {
        this.deputies.push(deputy);
    };
    Fraction.prototype["delete"] = function (deputyName) {
        var index = this.deputies.findIndex(function (el) { return el.name == deputyName; });
        if (index > -1)
            this.deputies.splice(index, 1);
    };
    Fraction.prototype.get = function (deputyName) {
        var index = this.deputies.findIndex(function (el) { return el.name == deputyName; });
        if (index > -1) {
            console.log(this.deputies[index]);
        }
    };
    Fraction.prototype.getCorrupt = function () {
        var bigСorrupt = this.deputies.sort(function (a, b) { return a.money + b.money; });
        console.log(bigСorrupt[0]);
    };
    Fraction.prototype.getAll = function () {
        this.deputies.forEach(function (el) { return console.log(el); });
    };
    return Fraction;
}());
var Eactions;
(function (Eactions) {
    Eactions["ADD"] = "0";
    Eactions["DELETE"] = "1";
    Eactions["GET"] = "2";
})(Eactions || (Eactions = {}));
function wraper(obj, method) {
    var fraction;
    switch (method) {
        case Eactions.ADD:
            console.log("ADD");
            var nameAdd = prompt("Name");
            var object = obj.name
                ? { name: nameAdd, age: Math.floor(Math.random() * 30 + 30), money: Math.floor(Math.random() * 30 + 30) }
                : new Fraction(nameAdd);
            fraction = obj.add(object);
            break;
        case Eactions.DELETE:
            console.log("DELETE");
            var nameDelete = prompt("Name");
            obj["delete"](nameDelete);
            break;
        case Eactions.GET:
            console.log("GET");
            var whatGet = prompt("\n            \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\n            0 - \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \n            1 - \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043F\u043E \u0438\u043C\u0435\u043D\u0438\n            2 - \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u0440\u0443\u043F\u0446\u0438\u043E\u043D\u043E\u0433\u043E \u043A\u043E\u0440\u0443\u043F\u0446\u0438\u043E\u043D\u0435\u0440\u0430\n            ");
            switch (whatGet) {
                case "0":
                    obj.getAll();
                    break;
                case "1":
                    var nameGet = prompt("Name");
                    fraction = obj.get(nameGet);
                    break;
                case "2":
                    obj.getCorrupt();
                    break;
            }
            break;
        default:
            console.log("Incorect comand");
            break;
    }
    return fraction;
}
var parlament_ = new Parlament();
var es = new Fraction("es");
parlament_.add(es);
var fraction_ = es;
do {
    var promt_ = prompt("\n    \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \n    0-\u0412\u0435\u0440\u0445\u043E\u0432\u043D\u0430 \u0420\u0430\u0434\u0430 \n    1-\u0424\u0440\u0430\u043A\u0446\u0438\u044F\n    ");
    switch (promt_) {
        case "0":
            var actionParlament = prompt("\n            \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\n            0 - \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u044E\n            1 - \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0424\u0440\u0430\u043A\u0446\u0438\u044E\n            2 - \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0424\u0440\u0430\u043A\u0446\u0438\u044E\n            ");
            fraction_ = wraper(parlament_, actionParlament) || fraction_ || es;
            break;
        case "1":
            var actionFraction = prompt("\n            \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \n            0-\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u043F\u0443\u0442\u0430\u0442\u0430\n            1-\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0435\u043F\u0443\u0442\u0430\u0442\u0430 \n            2-\u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u043F\u0443\u0442\u0430\u0442\u0430\n            ");
            wraper(fraction_, actionFraction);
            break;
    }
} while (true);
