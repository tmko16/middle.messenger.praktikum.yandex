import EventBus from './EventBus';
import {Indexed} from '../types';
import set from '../utils/set';
export enum StoreEvents {
	Updated = 'updated',
}
export class Store extends  EventBus{
	private state: Indexed = {};
	private static _instance: Store;

	constructor() {
		super();
		if (Store._instance) {
			return Store._instance;
		}
		Store._instance = this;
	}

	public getState() {
		return this.state;
	}

	public set(path: string, value: unknown) {
		set(this.state, path, value);
	}


}

export default Store;