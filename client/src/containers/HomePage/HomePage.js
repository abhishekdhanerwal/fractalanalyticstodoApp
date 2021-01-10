import React, { useEffect, useState } from 'react';
import TextInput from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/DropDown/DropDown';
import Accordian from '../../components/Accordian/accordian';
import Checkbox from '../../components/Checkbox/Checkbox';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function HomePage(props) {

    const [formType, setFormType] = useState(null);
    const [todoList, setTodoList] = useState({});
    const [formDetails, setFormDetails] = useState({
        input: '',
        bucketName: ''
    });
    const [isEdit, setIsEdit] = useState(false);
    const [updateListId, setUpdateListId] = useState(null);

    useEffect(() => {
        if(!props.bucketList){
            props.getBucketList();
        }

        if(!props.todoList){
            props.getTodoList();
        }

        if(props.bucketList && props.bucketList.length){
            setFormDetails({
                input: '',
                bucketName: ''
            });
            setIsEdit(false);
            setUpdateListId(null);
        }

        if(!props.bucketList || !props.bucketList.length){
            setFormType('bucket');
        } else {
            setFormType('todo');
        }

        if(props.todoList && props.todoList.length){
            let todoObject = {}
            props.todoList.forEach((data) => {
                if(!data.deleted){
                    if(!todoObject[data.bucketName]){
                        todoObject[data.bucketName] = [];
                    }
                    todoObject[data.bucketName].push(data);
                }
            });
            setTodoList(todoObject);
        }
    }, [props.bucketList, props.todoList]);

    const handleChange = (event) => {
        if(event.target.name === 'formType'){
            setFormType(event.target.value);
        }
        else {
            setFormDetails(Object.assign({}, formDetails, {[event.target.name]: event.target.value === "Select Bucket Name" ? '' : event.target.value}))
        }

    };

    const resetForm = (_e) => {
        setFormDetails(Object.assign({}, formDetails, {input: ''}))
    };

    const saveForm = (event) => {
        props.saveForm({
            formType,
            formDetails, 
            isEdit,
            updateListId
        })
    };

    const handleListChanges = (type, list) => {
        if(type !== 'EDIT'){
            props.changeList(type, list);
        } else {
            setFormDetails({
                input: list.name,
                bucketName: list.bucketName
            });
            setIsEdit(true);
            setFormType('todo');
            setUpdateListId(list._id);
        }
    };

    const cancelUpdate = () => {
        setIsEdit(false);
        setFormDetails({
            input: '',
            bucketName: ''
        });
    };

    return (
        <div className="container-fluid">
            <h2 style={{ fontFamily: "'Lucida Console', 'Courier New', monospace", color: "#563d7c" }}>Todo App</h2>
            <br />
            <div>
                <Checkbox id="inlineRadio1" value="todo" name="Create To-Do" checked={formType === "todo"}  disabled={!props.bucketList || !props.bucketList.length} onChange={handleChange} />
                <Checkbox id="inlineRadio2" value="bucket" name="Create Bucket" checked={formType === "bucket"}  disabled={!props.bucketList || !props.bucketList.length || isEdit} onChange={handleChange} />
            </div>
            <br />
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-3 col-4">
                    <TextInput name="input" placeholder={formType} value={formDetails.input} onChange={handleChange} onBtnClick={resetForm} />
                </div>
                {formType === "todo" ?
                <div className="col-md-3 col-lg-3 col-sm-3 col-4">
                    <Dropdown name="bucketName" onChange={handleChange} value={formDetails.bucketName} defaultValue="Select Bucket Name" bucketList={props.bucketList} />
                </div>
                : null}
                <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                    <Button onClick={saveForm} class="btn btn-primary btn-block" name={isEdit ? "Update" : "Save"} isDisabled={formDetails.input.length < 1 || (formType === "todo" && formDetails.bucketName.length < 1)} />
                </div>
                {isEdit ? 
                <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                    <Button onClick={cancelUpdate} class="btn btn-dark btn-block" name="Cancel" isDisabled={formDetails.input.length < 1 || (formType === "todo" && formDetails.bucketName.length < 1)} />
                </div>
                : null}
            </div>
            <br />
            <br />
            {!isEdit ?
            <Accordian bucketList={props.bucketList} todoList={todoList} onClick={handleListChanges} />
            : null}         
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bucketList: state.home.bucketList,
        todoList: state.home.todoList
    };
};

const mapDispatchToProps = Dispatch => {
    return {
        getBucketList: () => Dispatch(actions.getBucketList()),
        getTodoList: () => Dispatch(actions.getTodoList()),
        saveForm: (req) => Dispatch(actions.saveForm(req)),
        changeList: (type, list) => Dispatch(actions.changeList(type, list))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);