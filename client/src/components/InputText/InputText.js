import React from 'react';

function InputText(props) {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" name={props.name} placeholder={`Enter ${props.placeholder}`} value={props.value} onChange={props.onChange} aria-label={props.placeholder} aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={props.onBtnClick}>X</button>
            </div>
        </div>
    );
}

export default InputText;