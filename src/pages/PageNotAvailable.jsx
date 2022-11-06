import { Link } from "react-router-dom";
function PageNotAvailable() {
    return ( 
        <div className="bg-[#141c2f] text-slate-300 font-['Space_Grotesk'] h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-9xl uppercase">404</h1> 
            <p className="w-4/5 max-w-lg my-5">This page never existed, I don't even know how you found it. Before you say we don dey carry you dey go where you no know, go home. Abeg.</p>
            <button className="mx-auto w-full mt-9 mb-4">
                <Link to="/" className="border rounded px-5 py-3 hover:px-7 transition-all">Take me home please</Link>
            </button>
        </div>
     );
}

export default PageNotAvailable;