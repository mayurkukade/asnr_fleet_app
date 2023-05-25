import {configureStore} from '@reduxjs/toolkit'
// import googleReducer from '../../features/googleTokenSlice'
import authReducer from '../../api/authSlice'
import { apiSlice } from '../../api/apiSlice'
import { venderApiSlice } from '../../api/vendorSlice'
import { driverApiSlice } from '../../api/driverSlice'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [venderApiSlice.reducerPath]:venderApiSlice.reducer,
        [driverApiSlice.reducerPath]:driverApiSlice.reducer,

        auth: authReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})