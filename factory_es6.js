class Transport{
	constructor(how){
		this.logger = console;
		this._how   = how;
	}
	
	move(){
		this.logger.log(`Moving in the ${this._how} !!`);
	}
	
	get how() {
        return this._how;
    }
 	
    set how(value) {
        this._how = value;
    }
}

class Drone extends Transport{
	constructor(how = 'air' )
	{
		super(how);
	}
}

class Car extends Transport{
	constructor(how = 'ground' )
	{
		super(how);
	}
}

class TransportFactory{
    static getTransport(transportType){
        if(transportType == null)
            return null;
        else if(transportType === 'car')
            return new Car();
        else if(transportType === 'drone')
            return new Drone();
        else
            return null;
    }
}

TransportFactory.getTransport('car').move();