import React from 'react';

function LogoutPartial (){
    function handleSubmit(){
        localStorage.removeItem('user')
        function eraseCookie(name) {   
            document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';  
        }
        eraseCookie('user')        
        document.location.href = '/'
    }
    
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <a onClick={handleSubmit} class="btn">Do you want to logout?</a>
                </form>
 
            </div>
            
        )
    }


export default LogoutPartial;