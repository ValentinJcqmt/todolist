import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        element : "",
        items   : []
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element : '',
            items   : [
                ...this.state.items,
                {
                    element: this.state.element
                }
            ]
        });
    };

    deleteItem = (index) => {
        const newItems = this.state.items
        newItems.splice(index, 1);
        this.setState({
            items : newItems
        });
    }

    renderItems = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body"
                        style={{
                            position: "relative"
                        }}>
                        <h4>
                            {item.element}
                        </h4>
                        <i className="fas fa-times"
                            style={{
                                cursor      : "pointer",
                                color       : "red",
                                position    : "absolute",
                                top         : "5px",
                                right       : "5px"
                            }}
                            onClick={() => this.deleteItem(index)}>
                        </i>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <>
                <div className="card my-3">

                    <div className="card-header">
                        To-do List
                    </div>

                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label htmlFor="element">
                                    Chose(s) à faire
                                </label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element} />
                            </div>

                            <button className="btn btn-primary btn-block">
                                Ajouter
                            </button>

                        </form>
                    </div>

                </div>

                {this.renderItems()}
            </>
        )
    };
}

