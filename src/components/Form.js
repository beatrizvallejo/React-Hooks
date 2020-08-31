import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid'

const Form = ({createSpending}) => {

    const [spending, saveSpending] = useState({
        name: '',
        quantity: 0
    })
    const [error, isError] = useState(false);

    const handleState = e => {
        saveSpending({
            ...spending,
            [e.target.name] : e.target.value
        })
    }

    const {name, quantity} = spending;

    const addSpending = e => {  

        e.preventDefault();

        if(quantity < 0 || name === ""){
            isError(true);
            return;
        }

        isError(false);
        spending.id = shortid.generate();
        createSpending(spending);
    
        saveSpending({
            name: '',
            quantity: 0,
        })
    }

    let message = "Introduce un gasto válido"

    return ( 
        <form
            onSubmit = {addSpending}
        >
            <h2>Agrega tus gastos</h2>
            {error === true ?  <Error message = {message}/>  : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholer = "ej. transporte"
                    name = "name"
                    onChange = {handleState}
                    value = {name}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    name = "quantity"
                    onChange = {handleState}
                    value = {quantity}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>

     );
}
 
export default Form;