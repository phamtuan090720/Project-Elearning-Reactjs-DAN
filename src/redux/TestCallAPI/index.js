import React from 'react';
import {http} from '../../api/setting';
export default function TestCallAPI() {
    const getCategory = () =>{
       let promise = http.get('category/');
       promise.then((result)=>{
            console.log(result.data)
       })
       promise.catch((error)=>{
           console.log(error)
       })
    }
    React.useEffect(()=>{
        getCategory();
    },[])
    return (
        <div>
        </div>
    )
}
