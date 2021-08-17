import React from 'react';
import classes from './Dialogs.module.css';
import './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialogList}>
            <NavLink to={'/Dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>)
}

const DialogMessege = (props) => {
    return (
        <div className={classes.dialogMessege}>
            {props.textMessage}
        </div>)
}

const Dialogs = (props) => {
    return (
        <div className={classes.wrapperDialog}>
            <div className={classes.dialogsLists}>
                <DialogItem name='Alexandr' id='1' />
                <DialogItem name='Anvar' id='2' />
                <DialogItem name='Igor' id='3' />
                <DialogItem name='Alisa' id='4' />
                <DialogItem name='Nikolai' id='5' />
            </div>
            <div className={classes.dialogMessages}>
                <DialogMessege textMessage='Message 1' />
                <DialogMessege textMessage='Message 2' />
                <DialogMessege textMessage='Message 3' />
                <DialogMessege textMessage='Message 4' />
                <DialogMessege textMessage='Message 5' />
            </div>
        </div>
    )
}

export default Dialogs;