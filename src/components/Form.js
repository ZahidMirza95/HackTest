import React, {useState} from 'react';
import QuestionCard from './QuestionCard';

function Form() {

    const [value1, setValue1] = useState('');
    function handleValue(value, assignedValue) {
        setValue1(value);
    }

    console.log(value1);

    return (
        <div>
            <QuestionCard questionText={'1'} valueChange={handleValue}/>
        </div>
    );
}

export default Form;
