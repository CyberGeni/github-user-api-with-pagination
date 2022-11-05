import React from 'react'
function Error({error,resetErrorBoundary}) {
    return ( 
        <div role="alert" className='fallback'>
            <p>something went wrong</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>try again</button>
        </div>
     );
}

export default Error;