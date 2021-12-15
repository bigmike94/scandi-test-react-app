import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
function Header({headerText, navText, onProductSave, onDeleteChecked}) {
    const addButton =  <NavLink to={navText[0]==="ADD"?"/add-product":""} className="control-button">{navText[0]}</NavLink>;
    const saveButton =  <button className="add control-button" onClick={()=>{onProductSave()}}>{navText[0]}</button>;
    const cancelButton = <NavLink to="/" className="control-button">
                            {navText[1]}
                         </NavLink>
    const deleteButton = <button className="add control-button" id="delete-product-button" onClick={()=>onDeleteChecked()}>
                            {navText[1]}
                        </button>
    return (
        <header id="products-heading">
            <h1>{headerText}</h1>
            <div id="products-control-buttons">
                {navText[0]==="Save"?saveButton:addButton}
                {navText[1]==="Cancel"?cancelButton:deleteButton}
            </div>
        </header>
    );
}
export default Header;
