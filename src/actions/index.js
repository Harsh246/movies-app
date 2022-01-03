export function addFavourite(e){
    return {
type: 'ADD_FAV',
movie: e
};
}

export function removeFavourite(e){
    return {
type: 'RE_FAV',
movie: e
};
}

export function showAll()
{
    return {
        type: 'SHOW_ALL',
       
        };
};



export function showFav()
{
    return {
        type: 'SHOW_FAV',
       
        };
};
