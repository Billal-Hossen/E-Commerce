import { createSlice } from '@reduxjs/toolkit';
import fakeProducts from '../../data'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    orderedList:[],
    allProductList:fakeProducts,
    finishedList:[]
  },
  reducers: {
    // loadBooks: (state,{payload}) => {
    //    state.discoverList=payload;
         
    //    },
    addToOrderList: (state,{payload}) => {
     state.orderedList.push(payload);
      
    },
    removeFromOrderList: (state,{payload}) => {
     state.orderedList=state.orderedList.filter(r=>r.id !==payload.id);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {  addToOrderList, removeFromOrderList } = productSlice.actions;
// export const getBooks=(payload)=>(dispatch)=>{
//     fetch(`https://redux-book-shelf.herokuapp.com/books`)
//     .then(res=>res.json())
//     .then(({data})=>dispatch(loadBooks(data)))
// }

export default productSlice.reducer