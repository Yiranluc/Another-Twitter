import {Link} from 'react-router-dom';
import React from 'react';

export default function LoginHeader({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-blue-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}