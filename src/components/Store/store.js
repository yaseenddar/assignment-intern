import {configureStore} from '@reduxjs/toolkit'

import todo from '../Slices/todoSlice'

const store =  configureStore({
    reducer :{
        todo
    }
    
})
export {store} ;