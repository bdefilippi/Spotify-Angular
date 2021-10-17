import { OrderListPipe } from './order-list.pipe';
import * as mockData from '../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
    it('create an instance', () => {
        const pipe = new OrderListPipe();
        expect(pipe).toBeTruthy();
    });

    it('testing in and out values', () => {
        //Arrange
        const pipe = new OrderListPipe();
        const { data } = (mockData as any).default;

        //Act
        const result: TrackModel[] = pipe.transform(data);

        //Assert
        expect(result).toEqual(data);
    });

    it('test if "asc" order is correct', () => {
        //Arrange
        const pipe = new OrderListPipe();
        const { data } = (mockData as any).default;
        const firstValue = data.find((i: any) => i._id === 2); //19-2000
        const lastValue = data.find((i: any) => i._id === 1); //The Chain

        //Act
        const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
        const firstResult = result[0];
        const lastResult = result[result.length - 1];

        //Assert
        expect(firstResult).toEqual(firstValue);
        expect(lastResult).toEqual(lastValue);
    });

    it('test if "desc" order is correct', () => {
        //Arrange
        const pipe = new OrderListPipe();
        const { data } = (mockData as any).default;
        const lastValue = data.find((i: any) => i._id === 2); //19-2000
        const firstValue = data.find((i: any) => i._id === 1); //The Chain

        //Act
        const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
        const lastResult = result[0];
        const firstResult = result[result.length - 1];

        //Assert
        expect(lastResult).toEqual(firstValue);
        expect(firstResult).toEqual(lastValue);
    });
});
