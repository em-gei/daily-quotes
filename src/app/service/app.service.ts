import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	private defaultTodo: string[];

	constructor() {
		this.defaultTodo = [
			'Palestra',
			'Barbiere',
			'Supermercato',
			'Meccanico'
		];
	}

	/**
	 * @function
	 * @name getDefaultTodo
	 * @description Return the defaultTodo
	 */
	getDefaultTodo(): string[] {
		setTimeout(() => {
			return this.defaultTodo;
		}, 100);
		return [];
	}

}