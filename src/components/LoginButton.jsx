import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className='flex flex-col align-center justify-center items-center h-screen'>
                <h1 className='text-2xl font-semibold mb-10'>Google Authentication app built using Auth0</h1>
                <button
                    className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => loginWithRedirect()}
                    style={{ width: "250px", outline: "none", border: "0" }}
                >
                    Log in with Google
                </button>
            </div>
        )
    )
}

export default LoginButton