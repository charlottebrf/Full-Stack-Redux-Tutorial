let chai = require('chai');
let expect = chai.expect;
let immutable = require('immutable');
let List = immutable.List;
let Map = immutable.Map;
import {setEntries, next} from '../src/core';

describe('application logic', () => {

    describe('setEntries', () => {

        it('adds the entries to the state', () => {
            const state = Map({
                entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
            });
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Trainspotting', '28 Days Later')
                }),
                entries: List.of('Sunshine')
            }));
        });
    });
});