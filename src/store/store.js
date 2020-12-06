import { createStore } from 'redux';

import alertReducer from '../reducers/alertReducer';

export const store = createStore(alertReducer);
