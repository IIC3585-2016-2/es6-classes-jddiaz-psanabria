import {Car} from './car.js';
import {Drone} from './drone.js';

export class TransportFactory{
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