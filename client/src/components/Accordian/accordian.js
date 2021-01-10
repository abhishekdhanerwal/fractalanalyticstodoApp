import React from 'react';
import TodoCard from '../TodoCard/TodoCard';

function Accordian(props) {
    return (
        <div id="accordion">
            {props.bucketList && props.bucketList.map((elem, index) => {
                return (
                <div className="card" key={index}>
                <div className="card-header" id={`heading${elem.code}`} data-toggle="collapse" data-target={`#collapseOne${elem.code}`} aria-expanded="true" aria-controls={`collapseOne${elem.code}`}>
                    <h5 className="mb-0" style={{fontWeight: 700}}>{elem.name}</h5>
                </div>

                <div id={`collapseOne${elem.code}`} className={index === 0 ? "collapse show" : "collapse"} aria-labelledby={`heading${elem.code}`} data-parent="#accordion">
                    <div className="card-body">
                        <div className="row">
                            {props.todoList[elem.code] && props.todoList[elem.code].map((elem) => {
                                return (<div className="col-md-3 col-lg-3 col-sm-3 col-6" key={elem._id}>
                                    <TodoCard list={elem} onClick={props.onClick} />
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    );
};

export default Accordian;