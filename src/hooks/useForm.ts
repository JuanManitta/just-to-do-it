import { useState } from 'react';

export const useForm = () => {

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        name: '',
    })

    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        }); 
    }
    const onResetForm = () => {
        setFormState({
            email: '',
            password: '',
            name: '',
        })
    }
  
    return {
        ...formState,
        handleOnChange,
        onResetForm,
    }
}
