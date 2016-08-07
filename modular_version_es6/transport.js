export class Transport{
	constructor(how){
		this.logger = console;
		this._how = how;
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