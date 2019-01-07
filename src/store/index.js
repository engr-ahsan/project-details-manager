

// TODO: Create a store variable and call createStore();
//  TODO: Combine different reducers into a single reducer and pass it to the create store function

//  TODO: For asynchronous tasks like fetching data, we use middleware like redux thunk or redux saga
// TODo: install redux-thunk or redux-saga and add it as a middleware


import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

// TODO: use applyMiddleWare function in createStore to pass list of middlewares to the app
// TODO: use compose function to combine multiple store enhancers with the store

// TODO: To use firebase with your application along with firestore install react-redux-firebase and redux-firestore libs
// TODO: use thunk with extra arguments to allow firebase to be used to fetch and store data

import {getFirestore} from 'redux-firestore'
import { getFirebase} from 'react-redux-firebase';

// TODO: pass firebase configuration to reduxFireStore and reactReduxFirebase middlewares inside compose method

export default  () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore,})),
    );
}