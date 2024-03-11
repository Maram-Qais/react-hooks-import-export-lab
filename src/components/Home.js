import React from 'react';
import { username, city } from '../data/user'; // Importing username and city from user.js

function Home() {
    return (
        <div>
            <h1>Welcome to {username}'s portfolio</h1>
            <p>Located in {city}</p>
        </div>
    );
}

export default Home;
