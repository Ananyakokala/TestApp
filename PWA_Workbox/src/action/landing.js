export const itemsreceived = (items) => (
    {
        type: 'ITEMS_EMPLOYEE',
        items
    }
)

export const fetchItems = () => (dispatch) => {
    return fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then((response) => response.json())
        .then((json) => dispatch(itemsreceived(json)))
        .catch(err => console.error(err))
}