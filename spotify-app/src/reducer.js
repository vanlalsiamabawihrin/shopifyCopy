export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item:null,
    // token:'BQBw2Lgb4ltVDe6rEXg641XBst4LospqQ25U-BCWE9BqcWBIL5f_9xFVB_qu4DoM6pjVzM2aLVLZM1MnWIsdPEFyWFsbxhYaAET7FEmhBRp--zm4Bx8N7pSE3306fmd9LriRn7-L5aktw08WIDpqXGZrdQ2dOIUAZzjXxio3VA7iW_k2',
}

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER' : 
        return {
            ...state, 
            user: action.user
        };
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.token,
        };
        case 'SET_PLAYLIST':
        return {
            ...state,
            playlists: action.playlists,

        }
        case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly: action.discover_weekly,
        }
        default: 
        return state;
    }
}

export default reducer;