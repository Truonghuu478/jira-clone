import { configureStore, Tuple } from '@reduxjs/toolkit'

const reducer = {}
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()

})