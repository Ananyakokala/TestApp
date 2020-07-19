const items = (state = [], action) => {

    switch (action.type) {
        case 'ITEMS_EMPLOYEE':
            return [action.items]
        default:
            return state
    }
}

export default items