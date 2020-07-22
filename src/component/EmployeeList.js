import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchItems } from "../action/landing"
import MaterialList from "../container/MaterialList"

import history from "../utils/History"

class EmployeeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.getItems()

        this.timer = setInterval(() => this.getItems(), 5000);
    }

    getItems() {
        const { dispatch } = this.props
        dispatch(fetchItems())

        const tt = this.props
        const employeeList = tt.items.items.data

        this.setState({ data: employeeList });

        //  this.props.fetchItems()
        //     .then((res) => {
        //         console.log(res)
        //     })
    }

    navigateToDetails = (list) => {
        history.push({
            pathname: '/employeeDetails',
            state: { detail: list }
        });
    }

    render() {
        const tt = this.props;
        const employeeList = tt.items.items[0] ? tt.items.items[0].data : [];

        return (
            <div className="container">
                {employeeList.map(list => {
                    return (
                        <MaterialList
                            primary={list.employee_name}
                            secondary={list.employee_salary}
                            subheader={list.employee_age}
                            click={() => this.navigateToDetails(list)} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})
function mapDispathToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ fetchItems }, dispatch));

}
export default connect(mapStateToProps, mapDispathToProps)(EmployeeList)