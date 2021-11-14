const bicycle = {
    gear: 2,
    getCycleCost(newGear) {
        return newGear * 1000;
    }
};

class Vegetable {
    constructor(name) { this._name = name}
    get name() { return this._name;}
    set name(newname) { this._name = newname }
}

const carrot = new Vegetable('carrot');
let temp = carrot.name;
carrot.name = 'beetroot';
temp = carrot.name;
