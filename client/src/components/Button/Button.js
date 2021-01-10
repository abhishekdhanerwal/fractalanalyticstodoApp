import React from 'react';

function Button(props){
return <button type="button" className={props.class} onClick={props.onClick} disabled={props.isDisabled}>{props.name}</button>;
}

export default Button;