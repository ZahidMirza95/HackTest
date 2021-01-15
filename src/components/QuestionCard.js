import React, {useEffect, useState} from 'react';

function QuestionCard(props) {
  const { questionText, valueChange } = props;
  const [value, setValue] = useState('');

  function onValueChange(event) {
      setValue(event.target.value);
      valueChange(event.target.value);
  }

  return (
    <div className = "main">
      <div> {questionText} </div>
      <form>
          <label for="value1">Value</label>
          <input type="text" value={value} onChange={e => onValueChange(e)}/>
      </form>
    </div>
  );
}

export default QuestionCard;