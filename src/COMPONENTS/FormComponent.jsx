import React, { useState } from 'react'

function FormComponent() {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [contact,setContact] = useState("");
    const [submit,setSubmit] = useState([]);

    function handleName(e){
        console.log(e.target.value);
        setName(e.target.value);
    }

    function handleAddress(e){
        console.log(e.target.value);
        setAddress(e.target.value);
    }

    function handleContact(e){
        console.log(e.target.value);
        setContact(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        // console.log('submit');
        const user = { name, address, contact};
        // console.log(user)
        setSubmit([...submit, user]);
        console.log([...submit, user]);

        setName("");
        setContact("");
        setAddress("");
    }




  return (
    <div className='form-container wrapper my-3'>
        <h1 className='text-4xl font-bold text-center'>Form with Multiple States</h1>
      <form className='flex flex-col gap-3 items-center my-10' onSubmit={handleSubmit}>

        <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-[20px] font-medium'>Enter Full Name</label>
            <input type="text" className='border-1 w-[350px] py-2 px-4 rounded-3xl focus:outline-none border-gray-300' id='name' name='name' placeholder='John Doe' value={name} onChange={handleName} />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='text-[20px] font-medium'>Enter Home Address</label>
            <input type="text" className='border-1 w-[350px] py-2 px-4 rounded-3xl focus:outline-none border-gray-300' id='address' name='address' placeholder='Street 05 / Apt. 78' value={address} onChange={handleAddress} />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="contact" className='text-[20px] font-medium'>Enter Contact</label>
            <input type="text" className='border-1 w-[350px] py-2 px-4 rounded-3xl focus:outline-none border-gray-300' id='contact' name='contact' placeholder='+91 893329123' value={contact} onChange={handleContact} />
        </div>

        <div>
            <button className='bg-indigo-500 text-[17px] text-white font-medium py-1 px-4 rounded-3xl hover:bg-indigo-600' type='submit'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default FormComponent
