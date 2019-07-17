import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTexts } from '../actions/textActions'

class Texts extends Component {

    componentDidMount(){
        this.props.fetchTexts();
    };

    shouldComponentUpdate(nextProps) {
        if (nextProps.newPost) {
            this.props.texts.unshift(nextProps.newText)
        }
        return true;
    }


    render(){

        const everyText = this.props.texts.length ? (
            this.props.texts.map(text => (
            
                <div key={ text._id }>
    
                    <h3> { text.title } </h3>
                    <p> { text.content } </p>
    
                </div>
                )
            )
        ) : (
            <div style={{color: "gray"}}>
                <h5 > Fe de erratas. Agregue su texto y refresque la página</h5>
                <p> 
                Primera vez combinando React y Redux perdi la reactividad
                de la aplicacion, con suerte lo solucionare antes de que 
                clonen el directorio. <strong>Mientras tanto, refresque la 
                pagina luego de agregar el texto para verlo</strong>
                </p>
            </div>
        )
        


        return(
            <div>
                <h1>Texts</h1>
                { everyText }
            </div>
        )
    }
}


Texts.propTypes = {
    fetchTexts: PropTypes.func.isRequired,
    texts: PropTypes.array.isRequired,
    newText: PropTypes.object
};

const mapStateToProps = state => ({
    texts: state.texts.items,
    newText: state.texts.item
});

export default connect(mapStateToProps, { fetchTexts })(Texts);



