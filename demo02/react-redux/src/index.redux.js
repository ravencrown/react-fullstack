const Add_GUN = 'add';
const REMOVE_GUN = 'remove';

// reducer
export function counter(state=0, action) {
    switch(action.type) {
        case 'add':
            return state + 1
        case 'remove':
            return state - 1
        default:
            return 10
    }
}

export function addGUN() {
    return {type: Add_GUN};
}

export function removeGUN() {
    return {type: REMOVE_GUN};
}

export function addGUNAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN());
        }, 2 * 1000); 
    }
}