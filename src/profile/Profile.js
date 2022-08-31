import React from "react";
import PropTypes from 'prop-types';


const profile = (props) =>{
    return(
        <div>
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <p>{props.profession}</p>
            <p>{props.bio}</p>
            
        </div>
    )
}

profile.defaultProps = {
    name: "Majed Barakat",
    profession: "Developer",
    bio: "from Syira",
}

profile.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
}

export default profile;