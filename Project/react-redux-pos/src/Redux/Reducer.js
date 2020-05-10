import data from '../Components/data/data.json'
import {
    ADD_ITEM, REMOVE_ITEM,
} from './Actiontypes'

export const initStore = {
    data: data,
    items: [],
    isLoggedin: false,
};

const Reducer = (state = initStore, action) => {
    console.log("reducer called");
    switch (action.type) {
        case ADD_ITEM:
            let item  = []
            state.data.filter(elem => {
                if(elem.title === action.payload.title){
                    return item.push([elem, action.payload.qty])
                }
            })
            return {
                ...state,
                items: [...state.items, ...item]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: [...state.items].filter(item => {
                  return item[0].id !== action.payload
                })
              }
        default:
            return state;
    }
};

export default Reducer