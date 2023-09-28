import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
