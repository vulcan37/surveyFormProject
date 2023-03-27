import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            // Delete the JWT token from local storage
            localStorage.removeItem('token');
            // Send logout request to backend
            await axios.post('http://localhost:5000/api/logout');
            // Redirect the user to the login page
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div>
                <button
                    onClick={handleLogout}
                >Logout</button>
            </div>
        </>
    )
}

export default LogOut