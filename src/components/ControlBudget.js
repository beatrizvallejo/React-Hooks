import React, {Fragment} from 'react';
import {checkBudget} from "../helpers"

const ControlBudget = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget} €
            </div>

            <div className={checkBudget(budget, rest)}>
                Resto: {rest} €
            </div>

        </Fragment>


     );
}
 
export default ControlBudget;