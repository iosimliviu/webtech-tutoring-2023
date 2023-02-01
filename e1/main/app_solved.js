class Vehicle {
	constructor(name){
		this.name = name
	}

	drive(distance){
		return `${this.name} drives ${this.distance}`
	}

	// TODO: implement method
	makeStop(){
		return `${this.name} makes a stop`
	}
}

// TODO: implement Car

class Car extends Vehicle {
	constructor(name) {
		if(typeof name === "string"){
		super(name);
		}
		else throw new Error("CreationError");
	}
	
	fuels(liters){
		return `${this.name} fuels ${liters}`;
	}
	
	drive(distance){
		return `${this.name} is a Car and cannot drive`;
	}
}

module.exports.Vehicle = Vehicle
module.exports.Car = Car