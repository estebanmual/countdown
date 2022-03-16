import React, { useState } from 'react'
import style from './App.module.css';
import Clock from './Components/Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

const App = () => {
  const [deadline, setDeadline] = useState('December 25, 2022')
  const [newDeadline, setNewDeadline] = useState('')

  const changeDeadline = () => {
    setDeadline(newDeadline);
  };

  return (
    <div className={style.App}>
        <div className={style.App__title}>Countdown to { deadline }</div>
        <Clock deadline={deadline} />
        <Form inline="true" className={style.Form}>
            <FormControl className={style.Form__input} placeholder='new date' onChange={ e => setNewDeadline(e.target.value)}/>
            <Button className={style.Form__button} onClick={changeDeadline}>Submit</Button>
        </Form>
    </div>
  )
}

export default App