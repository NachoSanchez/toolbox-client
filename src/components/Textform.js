import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createText } from '../actions/textActions';

class TextForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const text = {
            title: this.state.title,
            content: this.state.content
        }

        //Redux
        this.props.createText(text);
    }

    render(){
        return(
            <div className="form-group">

            <h1 className="mt-5">Add a Text</h1>

                <form onSubmit={ this.onSubmit }>

                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter your text title" 
                    name="title"
                    onChange={ this.onChange } 
                    value={ this.state.title }>
                    </input>

                    <textarea className="form-control mt-2" 
                    placeholder="Here is were you write..." 
                    name="content" 
                    value={ this.state.content } 
                    onChange={ this.onChange } rows="5">
                    </textarea>

                    <button type="submit" 
                    className="btn btn-outline-primary btn-lg mt-2">
                    Save it!</button>

                </form>
            </div>
        )
    }
}

TextForm.propTypes = {
    createText: PropTypes.func.isRequired
}

export default connect(null, { createText })(TextForm);