import { useEffect, useState } from "react";

export default function Header (){
    const [search , setSearch]= useState('')
    useEffect(()=>{
        document.addEventListener('update_search', (evt)=> {
            setSearch(evt.detail)
        })
        return() => document.removeEventListener('update_search' , () =>{});
    },[])
    return <div 
    style={{textAlign: 'center', height:100, border:' 1px solid #ccc'}}>
    Header  {search}
    </div>;
}