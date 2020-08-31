import React, {Fragment, useState} from 'react';
import Error from './Error'

const Question = ({saveBudget, saveBudgetRest, updateComponentQuestion}) => {

    const [budget, updateBudget] = useState(0);
    const [error, isError] = useState(false);

    const addBudget = e => {
        e.preventDefault();
        console.log(budget);
        if(budget <= 0 || isNaN(budget)){
            isError(true);
            return;
        }
        isError(false);
        saveBudget(budget);
        saveBudgetRest(budget);
        updateComponentQuestion(false);

    }

    let message = "Introduce un presupuesto válido"

    return ( 
        <Fragment>
            <h2>Introduce tu presupuesto</h2>

            {error === true ?  <Error message = {message}/>  : null}

            <form
                onSubmit = {addBudget}
            >
                <input 
                    type="number" 
                    placeholder="Presupuesto..."
                    className="u-full-width"
                    onChange = { e => updateBudget(parseInt(e.target.value))}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;