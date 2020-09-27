import {useState} from 'react';

const useCheckInput = (initial) => {
    const [value, setValue] = useState(initial);
    
    const onChange = (e) => {
        setValue(e.target.checked)
    }
    return {value, setValue, onChange};
}

export default useCheckInput;