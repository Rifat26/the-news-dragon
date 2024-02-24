import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, dolorem ipsum! Accusamus, amet esse inventore ipsam aliquam unde, facilis cumque quaerat, repellat vero eos? Sed dolorum fugiat necessitatibus aperiam optio.</p>
            <p>Go back to<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;