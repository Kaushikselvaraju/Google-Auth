import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className='flex flex-col align-center items-center justify-center h-screen'>
                <div className='flex flex-col align-center items-center justify-center gap-3 mb-2'>
                    <img src={user.picture} alt={user.name} style={{ width: "100px", borderRadius: "50%" }} />
                    <div className="flex gap-1">
                        <p className='font-bold'>User Name : </p>
                        <h2>{user.name}</h2>
                    </div>
                    <div className="flex gap-1">
                        <p className='font-bold'>Email Address :</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="flex gap-1">
                        <p className='font-bold'>Nick Name :</p>
                        <p>{user.nickname}</p>
                    </div>
                </div>
                <LogoutButton />
            </div>
        )
    )
}

export default Profile