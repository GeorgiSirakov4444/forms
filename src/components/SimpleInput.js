import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const nameRef = useRef();

  const nameHandler = event => {
    setName(event.target.value);
  };

  const formHandler = event => {
    event.preventDefault();
    console.log(name);
    const currName = nameRef.current.value;
    console.log(currName);
    setName('initial state');
  };


  return (
    <form onSubmit={formHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
              ref={nameRef}
              type='text' 
              id='name' 
              onChange={nameHandler}
              value={name}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
