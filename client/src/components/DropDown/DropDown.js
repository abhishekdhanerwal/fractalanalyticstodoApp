import React from 'react';

function Dropdown(props) {
    return (
        <select className="custom-select" name={props.name} onChange={props.onChange} value={props.value} >
            <option value="">{props.defaultValue}</option>
            {props.bucketList.map((elem) => <option key={elem.code} value={elem.code}>{elem.name}</option>)}
        </select>
    )
}

export default Dropdown;