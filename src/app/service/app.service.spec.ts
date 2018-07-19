import { TestBed, async } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {

	const appService = new AppService();

	it('should get defaultTodo', async() => {
		spyOn(appService, 'getDefaultTodo').and.returnValue(Promise.resolve(true));
		const array: string[] = [];
	});
});