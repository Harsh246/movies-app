export default function movies(state, action){

    switch(action.type){
        case 'ADD_FAV':
           
            return {
                ...state,
    favourite: [action.movie, ...state.favourite]
                
            }
            case 'RE_FAV':{
var fav = state.favourite;
var index = fav.indexOf(action.movie);
if (index > -1) {
    fav.splice(index, 1);
}
                return{
                    ...state,
                    favourite: fav
                }}
                case 'SHOW_ALL':
                    return{
                        ...state,
                        showList: true,
                        showFav: false
                    }

                    case 'SHOW_FAV':
                        return{
                            ...state,
                            showList: false,
                            showFav: true
                        }
    default:
    return state;
}


}