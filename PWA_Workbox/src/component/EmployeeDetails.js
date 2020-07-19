import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';

import '../index.css';
import history from "../utils/History"


const EmployeeDetails = props => {
    const location = useLocation();

    const materialClick = () => {
        history.push({
            pathname: '/TablueList'
        });
    }

    const pocClick = props => {
        history.push({
            pathname: '/pocList'
        });
    }

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.detail);
    }, [location]);

    return (
        <div style={{ padding: 30 }}>
            <p1>{location.state.detail.employee_name}</p1><br /> <br />
            <p2>{location.state.detail.employee_age}</p2><br /> <br />

            <Button onClick={materialClick} variant="contained" color="secondary">
                Tablue
     </Button> <br /> <br />
            <Button onClick={pocClick} variant="contained" color="secondary">
                POC
     </Button>
        </div>
    )
}
export default EmployeeDetails