import React from 'react';
import preloader from '../../../assets/image/Loader.gif'
function Preloader(props) {
    return (
        <div
            style={{backgroundColor:'white'}}>
            <img
                src={preloader}

            />
        </div>
    );
}

export default Preloader;