import React from 'react';

function Checkbox(props) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="formType" id={props.id} value={props.value} checked={props.checked} disabled={props.disabled} onChange={props.onChange} />
            <label className="form-check-label" htmlFor={props.id}>{props.name}</label>
        </div>
    );
}

export default Checkbox;