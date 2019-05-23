import * as places from './places';

import { places as reducer } from './places';


describe('places -> actions', () => {

    it('should create an action to request places', () => {
        const expectedAction = {
            type: places.REQUEST_PLACES
        };

        expect(places.requestPlaces()).toEqual(expectedAction)
    })

    it('should create an action to receive places', () => {
        const placesData = ["test1", "test2"];
        const expectedAction = {
            type: places.RECEIVE_PLACES,
            places: placesData
        };

        expect(places.receivePlaces(placesData)).toEqual(expectedAction)
    })

    it('should create an action to filter places', () => {
        const filter = 'xx';
        const expectedAction = {
            type: places.FILTER_PLACES,
            filter
        };

        expect(places.filterPlaces(filter)).toEqual(expectedAction)
    })

    it('should create an action to request a place', () => {
        const id = 'xx';
        const expectedAction = {
            type: places.REQUEST_PLACE,
            id
        };

        expect(places.requestPlace(id)).toEqual(expectedAction)
    })

    it('should create an action to receive a place', () => {
        const place = { name: 'xx' };
        const expectedAction = {
            type: places.RECEIVE_PLACE,
            place
        };

        expect(places.receivePlace(place)).toEqual(expectedAction)
    })

})

describe('places -> reducers', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                fetching: false,
                items: [],
                filter: '',
                placeId: null,
                place: null
            })
    })

    describe('should handle REQUEST_PLACES', () => {

        let action;
        beforeEach(() => {
            action = { type: places.REQUEST_PLACES };
        })

        it(' => state empty', () => {
            expect(reducer({}, action)).toEqual({ fetching: true });
        })

        it(' => state defined', () => {

            const initialState = {
                fetching: false,
                items: [],
                filter: '',
                placeId: null,
                place: null
            };

            expect(reducer(initialState, action)).toEqual(
                {
                    fetching: true,
                    items: [],
                    filter: '',
                    placeId: null,
                    place: null
                }
            );
        })

    });

    describe('should handle RECEIVE_PLACES', () => {

        let action;
        let items;
        beforeEach(() => {
            items = [{ name: 'x' }];
            action = { type: places.RECEIVE_PLACES, places: items };
        })

        it('=> state empty', () => {

            expect(reducer({}, action)).toEqual({
                fetching: false,
                items
            });

        });

        it('=> state defined', () => {

            const state = {
                fetching: true,
                items: [],
                filter: '',
                placeId: null,
                place: null
            };

            expect(reducer(state, action)).toEqual({
                fetching: false,
                items,
                filter: '',
                placeId: null,
                place: null
            });

        });

    })

    describe('should handle FILTER_PLACES', () => {

        let action;
        let filter;
        beforeEach(() => {
            filter = 'xx';
            action = { type: places.FILTER_PLACES, filter };
        })

        it('=> state empty', () => {
            expect(reducer({}, action)).toEqual({
                filter
            });
        });

        it('=> state defined', () => {

            const state = {
                fetching: true,
                items: [],
                filter: '',
                placeId: null,
                place: null
            };

            expect(reducer(state, action)).toEqual({
                fetching: true,
                items: [],
                filter: 'xx',
                placeId: null,
                place: null
            });

        });

    })

    describe('should handle REQUEST_PLACE', () => {

        let action;
        let id;
        beforeEach(() => {
            id = 1;
            action = { type: places.REQUEST_PLACE, id };
        })

        it('=> state empty', () => {
            expect(reducer({}, action)).toEqual({
                placeId: id
            });
        });

        it('=> state defined', () => {

            const state = {
                fetching: true,
                items: [],
                filter: '',
                placeId: null,
                place: null
            };

            expect(reducer(state, action)).toEqual({
                fetching: true,
                items: [],
                filter: '',
                placeId: id,
                place: null
            });

        });

    })

    describe('should handle RECEIVE_PLACE', () => {

        let action;
        let place;
        beforeEach(() => {
            place = { name: 'x' };
            action = { type: places.RECEIVE_PLACE, place };
        })

        it('=> state empty', () => {
            expect(reducer({}, action)).toEqual({
                place: place
            });
        });

        it('=> state defined', () => {

            const state = {
                fetching: true,
                items: [],
                filter: '',
                placeId: 1,
                place: null
            };

            expect(reducer(state, action)).toEqual({
                fetching: true,
                items: [],
                filter: '',
                placeId: 1,
                place: place 
            });

        });

    })

})
