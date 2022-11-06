import React from 'react'

function Error({error,resetErrorBoundary}) {
    return (    
        <div role="alert" className="bg-[#141c2f] text-slate-300 font-['Space_Grotesk'] h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl uppercase">erm... i think you broke something...</h1> 
            <pre className="mt-5 whitespace-pre-wrap">Error: {error.message}</pre>
            <p className="w-4/5 max-w-lg my-5">Argh! It was working perfectly before you clicked that button. Rule 101 of this site: if it works, don't touch it. We'll try to fix it only if you promise not to touch anything else.</p>
            <button className="border rounded px-5 py-3 hover:px-7 transition-all" onClick={resetErrorBoundary}>I promise</button>
        </div>
     );
}

export default Error;