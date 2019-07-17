import { FETCH_TEXTS, NEW_TEXT } from './types';

export const fetchTexts = () => dispatch => {
    
    fetch('http://localhost:4000/api/texts')
        .then(res => res.json())
        .then((texts) => 
            dispatch({
                type: FETCH_TEXTS,
                payload: texts
            })
        );

}

export const createText = (postData) => dispatch => {
    
    fetch('http://localhost:4000/api/texts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(text => 
        dispatch({
            type: NEW_TEXT,
            payload: text
        })
    ).then(res => console.log(res.message));

}