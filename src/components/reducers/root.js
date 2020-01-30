import { combineReducers } from 'redux';

import { categoriesReducer as categories } from './categories';
import { continents } from './continents';
import { drives } from './drives';
import { flags } from './flags';
import { places } from './places';
import { placeGroups } from './placeGroups';
import { routes } from './routes';
import { territoriesReducer } from './territories';
import { territoryTypes } from './territoryTypes';

const rootReducer = combineReducers({ 
    categories,
    continents,
    drives,
    flags,
    places,
    placeGroups,
    routes,
    territories: territoriesReducer,
    territoryTypes
 });

export default rootReducer;
