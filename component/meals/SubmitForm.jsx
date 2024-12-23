"use client"
import { useFormStatus } from "react-dom"

export default function SubmitForm(){
    const {pending} = useFormStatus();
    console.log("Pending",pending);
    
    return(
        <>
        <button disabled={pending}>{pending ? "Submiting..." : "Share Meal"}</button>
        </>
    )    
}