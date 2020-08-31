import React, {useState, useEffect, Fragment} from 'react';

import Pregunta from './components/Pregunta'
import Form from './components/Form'
import List from './components/List'
import ControlBudget from './components/ControlBudget'

function App() {

  const [budget, saveBudget] = useState(0);
  const [rest, saveBudgetRest] = useState(0);

  const [showquestion, updateComponentQuestion] = useState(true);

  const [spendinglist, updateSpendingList] = useState([]);

  const createSpending  = spending => {
    updateSpendingList([
      ...spendinglist,
      spending
    ])
  }

  useEffect(() =>{
    let suma = 0
    spendinglist.map((el)=>{
        suma += parseInt(el.quantity);
        return suma;
    })
    saveBudgetRest(budget - suma);
  },[spendinglist, budget])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">

        {showquestion ?  
            <Pregunta 
              saveBudget = {saveBudget}
              saveBudgetRest = {saveBudgetRest}
              updateComponentQuestion = {updateComponentQuestion}
            />
            :           
              <div className="row">
                <div className="one-half column">
                  <Form 
                      createSpending = {createSpending}           
                  />
                </div>
                <div className="one-half column">
                  {spendinglist.length > 0 ?
                    <Fragment>
                        <List                                     
                          spendinglist = {spendinglist}
                        />
                        <ControlBudget 
                          budget = {budget}
                          rest = {rest}
                        />
                      </Fragment>
                  :
                    <p>No se han añadido gastos todavía.</p>
                  }
                </div>
              </div>
            
        }    
        </div>
      </header>
    </div>
  );
}

export default App;
