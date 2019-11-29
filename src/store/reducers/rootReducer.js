import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

import businessListReducer from './businessList';

const rootReducer = combineReducers({
	businessList: businessListReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
});

export default rootReducer;