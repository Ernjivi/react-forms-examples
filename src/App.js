import React, { useReducer } from 'react';

function App() {
  const [userInput, setUserInput] = useReducer(
    (state, newSatate) => ({...state, ...newSatate}),
    {
      firstName: ''
    }
  );

  const onChange = evt => {
    const {name, value} = evt.target;
    setUserInput({[name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(userInput);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="firstName" onChange={onChange} value={userInput.firstName} />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
