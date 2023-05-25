import { apiSlice } from "./apiSlice";
const DRIVER_URL = '/api'

export const driverApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        DriverDetails : builder.query({
            query:() =>({
                url:`${DRIVER_URL}/driver`,
               
            })
        })
    })
    
})

export const {
    useDriverDetailsQuery
} = driverApiSlice