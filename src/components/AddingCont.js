import { useState,useEffect} from "react";
import axios from 'axios';

export const AddingCont=()=>{

    const [name,setName]=useState('');
    const [lastname,setLastname]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [notes,setNotes]=useState('');
    const [contact,setContact]=useState();


    useEffect(()=>{
        axios.get('http://localhost:5000/contacts')
                .then(result=>setContact(result.data.map(cont=>cont.phoneNumber)))
                .catch(error=>console.log(error))
    });

    const onChangeName=(event)=>{
        setName(event.target.value);
    };

    const onChangeLastname=(event)=>{
        setLastname(event.target.value);
    };

    const onChangeNotes=(event)=>{
        setNotes(event.target.value);
    };
    const onChangePhoneNumber=(event)=>{
        setPhoneNumber(event.target.value);
    };

   // const onSubmitHandle=async(event)=>{
    //    event.preventDefault();
    //    let cont
   // }
    return(
        <>
            <h3 style={{color:'blue'}}>Adding Contact</h3> 
            <div style={{height:'10px'}}></div>
        </>
    );
}