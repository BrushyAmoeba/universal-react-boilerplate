// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
import Helmet from 'react-helmet'
import favicon from 'serve-favicon'
// local imports
import {
    buildDir,
    assetsDir,
    favicon as faviconPath,
} from 'config/projectPaths'
import routes from 'routes'
import {createStore} from 'store'
import htmlTemplate from './templates/index.jade'


const app = express()

/* Application-wide Middleware */

// add the favicon
app.use(favicon(faviconPath))
// compress responses
app.use(compression())
/* Routing */

// route static files to build and assets dirs
app.use('/static', serveStatic(buildDir), serveStatic(assetsDir))

// route all surviving requests through the react-router routes
app.all('*', async function (req, res) {

    // figure out the appropriate route
    match({routes, location: req.url}, async function (error, redirectLocation, renderProps) {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if route was found but is redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if route was found and is not a redirect
        } else {

            // create redux store with initial data
            const store = createStore()
            // initial application state
            const initialState = JSON.stringify(store.getState())
            // rendered app
            let renderedComponent

            // if route was found
            if (renderProps) {
                // render routed application
                renderedComponent = renderToString(
                    <Provider store={store} >
                        <RoutingContext {...renderProps} />
                    </Provider>
                )

            // otherwise route was not found
            } else {
                // set response status to 404
                res.status(404)
                // render 404 page
                renderedComponent = 'not found'
            }

            // figure out the appropriate head information
            let head = Helmet.rewind()

            // render jade template with component mounted
            res.send(htmlTemplate({
                initialState,
                renderedComponent,
                head,
            }))
        }
    })
})


export default app
