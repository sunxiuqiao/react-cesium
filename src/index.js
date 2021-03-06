import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import BaseViewer  from './containers/viewerContainer'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
// import rootReducer from './reducers/combianReducers'
import {initLayerContainerReducer} from './reducers/layerContainer'
import rootReducer from './reducers/rootReducer'
import './style/index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BaseViewer></BaseViewer>
        </MuiThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
) 