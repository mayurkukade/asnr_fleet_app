import { apiSlice } from "./apiSlice";
// const VENDOR_URL = '/api'

export const venderApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        VendorDetails : builder.query({
            query:() =>({
                url:`/vendor`,
               
            })
        }),
        VendorId:builder.query({
            query:(id)=>({
                url:`/driver/id?id=${id}`
            })
        })
        
    })
    
})

export const {
    useVendorDetailsQuery,
    useVendorIdQuery
    
} = venderApiSlice