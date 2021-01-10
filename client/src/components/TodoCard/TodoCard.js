import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

function TodoCard(props) {
  return (
    <div className="card" style={{ backgroundColor: "#563d7c", color: 'white', padding: 5, marginTop: 10 }}>
      <ReactTooltip />
      <div className="row">
        <div className="col-md-9 col-lg-9 col-sm-9 col-8">
          {props.list.name}
        </div>
        <div className="col-md-3 col-lg-3 col-sm-3 col-4">
          <div style={{ textAlign: 'center', fontSize: 20 }}>
            <input style={{ width: 20, height: 20 }} data-tip={`Mark ${props.list.isDone ? 'Undone' : 'Done'}`} className="form-check-input" type="checkbox" checked={props.list.isDone} onChange={() => props.onClick('CHECK', props.list)} id="defaultCheck1" />
          </div>
          <br />
          <br />
          <div>
            <FaEdit data-tip="Edit" style={{ float: 'left', fontSize: 20, cursor: 'pointer' }} onClick={() => props.onClick('EDIT', props.list)} />
            <FaTrashAlt data-tip="Delete" style={{ float: 'right', fontSize: 20, cursor: 'pointer' }} onClick={() => props.onClick('DELETE', props.list)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;