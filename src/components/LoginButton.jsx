import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className='flex flex-col align-center justify-center items-center h-screen'>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => loginWithRedirect()}
                    style={{ width: "250px", outline: "none", border: "0" }}
                >
                    Log In
                </button>
            </div>
        )
    )
}

export default LoginButton