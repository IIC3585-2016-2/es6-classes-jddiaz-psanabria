import {Transport} from './transport.js';

export class Car extends Transport{
	constructor(how = 'ground' )
	{
		super(how);
	}
}