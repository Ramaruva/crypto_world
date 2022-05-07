import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
   'X-RapidAPI-Key': '484763881amshf4c0f6bb55dcd2cp127c27jsn91242c4ca681'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/coins'
 
const createRequest= (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints :(builder)=>({
        getCryptos :builder.query({
            query:()=>createRequest('/coins')
        })
    })
})
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': '484763881amshf4c0f6bb55dcd2cp127c27jsn91242c4ca681'
//     }
//   };