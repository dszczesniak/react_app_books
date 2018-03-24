export default function(state={}, action){
    switch(action.type){
        case 'GET_BOOKS':
            return {...state, list:action.payload}
        case 'GET_BOOK_WITH_REVIEWER':
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'CLEAR_BOOK_W_REVIEWER':
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'ADD_BOOK':
            return {
                ...state, 
                newbook: action.payload
            }
        case "CLEAR_NEWBOOK":
            return{
                ...state,
                newbook: action.payload
            }
        case "GET_BOOK":
            return{
                ...state,
                book: action.payload
            }
        case "UPDATE_BOOK":
            return{
                ...state,
                updateBook: action.payload.success,
                book:action.payload.doc // we overwrite the 'book' with new data, to be sure after 
            }                           // edition the new data will show up immediately on site
        case "DELETE_BOOK":
            return{
                ...state,
                postDeleted: action.payload
            }
        case "CLEAR_BOOK":
            return{
                ...state,
                updateBook: action.payload.updateBook,
                book: action.payload.book,
                postDeleted: action.payload.postDeleted
            }
        default:
            return state;
    }
}