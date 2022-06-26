import React from 'react';

function LogoutPartial (){
    function handleSubmit(){
        localStorage.removeItem('user')
        function eraseCookie(name) {   
            document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';  
        }
        eraseCookie('user')        
    }
    
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="btn" onClick={handleSubmit}>Do you want to logout?</button>
                </form>
 
            </div>
            
        )
    }


export default LogoutPartial;