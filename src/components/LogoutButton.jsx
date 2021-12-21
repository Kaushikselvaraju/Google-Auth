import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button
                className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => logout()}
                style={{ width: "250px", outline: "none", border: "0" }}
            >
                Log Out
            </button>
        )
    )
}

export default LogoutButton