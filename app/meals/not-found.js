import Link from "next/link";
import '@/app/globals.css'

export default function PageNotFound(){
    return(
        <>
            <h1>Not found</h1>
            <p className="not-found">Could not found ,What you search for!</p>
            <Link href={"/"} className="not-found">Back to Home</Link>
        </>
    )
}