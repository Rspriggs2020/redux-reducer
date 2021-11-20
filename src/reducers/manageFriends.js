export function manageFriends(state = { friends: [],
}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return (
                {...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]}
            )
        case 'REMOVE_FRIEND':
            const deleteFren = state.friends.findIndex( friend => friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, deleteFren),
                        ...state.friends.slice(deleteFren + 1)
                        ]}
                    )
        default:
            return state
    }
}
