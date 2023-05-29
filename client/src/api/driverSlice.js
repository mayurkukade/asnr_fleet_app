import { apiSlice } from "./apiSlice";
// const DRIVER_URL = '/api'

export const driverApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        DriverDetails : builder.query({
            query:() =>({
                url:`$/driver`,
               
            })
        })
    })
    
})

export const {
    useDriverDetailsQuery
} = driverApiSlice