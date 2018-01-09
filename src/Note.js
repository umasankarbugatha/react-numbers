import React from 'react'
import './App.css'
import Draggable from 'react-draggable'

var createClass = require('create-react-class');

var Note = createClass({
    getInitialState(){
        return {editing:false}
    },
    componentWillMount() {
        this.style = {
            right : this.randomBetween(0,window.innerWidth - 150, 'px'),
            top : this.randomBetween(0,window.innerHeight - 150, 'px')
        }                  
    },
    randomBetween(x,y,s){
        return (x + Math.ceil(Math.random() * (y-x))) + s
    },
    remove(){
        this.props.onRemove(this.props.id)
    },
    renderDisplay(){
        return (
            <div className="note" style={this.style}>
                <p className="numberStyle">{this.props.children}</p>
                <span>
                    <button onClick={this.remove}>X</button>
                </span>
            </div>
        )
    },
    render(){
        return (
           <Draggable>
                {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
           </Draggable>
       )
    }
}) 

export default Note