import React from 'react';

const List = ({spendinglist}) => {

    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>

           {spendinglist.map(item => (
                <li className="gastos" key={item.id}>
                    <p>{item.name}
                        <span className="gasto">{item.quantity} €</span>
                    </p>
                </li>
            ))}
            
        </div>

    );
}
 
export default List;