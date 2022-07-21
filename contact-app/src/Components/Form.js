import React from 'react';
import { useState, useEffect } from 'react';

const initialFormValues = { fullName: "", phoneNumber: ""}; //inputları boşaltmak için

function Form({ addContact, contacts }) {
    console.log(addContact);

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === '' || form.phoneNumber === '') {
            return false;
        }

        addContact([...contacts, form]);
        console.log(form);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <input name="fullName" placeholder='Full Name' value={form.fullName} onChange={onChangeInput} />
                    </div>

                    <div>
                        <input name="phoneNumber" placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput} />
                    </div>

                    <div className='btn'>
                        <button><b>Add</b></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form