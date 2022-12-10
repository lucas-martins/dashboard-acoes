import React from "react";

const useForm = () => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    const validate = (val) => {
        if(val.length === 0) {
            setError('Preecha um valor')
            return false
        } else {
            setError(null)
            return true
        }
    }

    const onChange = ({target}) => {
        if(error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        error
    }
}

export default useForm