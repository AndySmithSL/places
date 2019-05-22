import { combineReducers } from 'redux';
import { continents } from './continents';
import { flags } from './flags';
import { territories } from './territories';
import { territoryTypes } from './territoryTypes';

const rootReducer = combineReducers({ 
    continents,
    flags,
    territories,
    territoryTypes
 });

export default rootReducer;
