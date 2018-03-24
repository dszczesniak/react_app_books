import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    let request = axios.get('/api/logout')
                .then(response => {
                    setTimeout(()=>{
                        props.history.push('/')
                    }, 3000)
                })

    return (
        <div className="logout_container">
            <h1>
                You have succesfully logout!
            </h1>
        </div>
    );
};

export default Logout;