import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material';
import React from 'react'
import { useState } from 'react';
function D4CE(){
  const [name,setName] = useState('');
  const [fruit,setFruit] = useState('');
  const [msg,setMsg] = useState('');


  const setSubmit = (event) => {
    event.preventDefault();

    setMsg(`Hello,${name}! Your favorite fruit is ${fruit}`);
    setName('');
    setFruit('');
  };
  return (
    <div style={{marginTop:"200px"}}>
      <form onSubmit={setSubmit}>
        <input
        type="text"
        name="name"
        style={{width:300}}
        value={name}
        placeholder="Name"
        onChange={(event) =>
          setName(event.target.value)
        }
        />
        <br/><br/>
        <FormControl style={{width:300}}>
        <InputLabel variant="standard">Choose a fruit
        </InputLabel>
        <Select 
        placeholder="choose a fruit"
        value={fruit}
        onChange={(event) =>
          setFruit(event.target.value)
        }
        >
          <MenuItem value={"Apple"}>Apple</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Cherry"}>Cherry</MenuItem>
          <MenuItem value={"Durian"}>Durian</MenuItem>
          <MenuItem value={"Elderberry"}>Elderberry</MenuItem>
        </Select>
        </FormControl>
        <br/><br/>
        <br/><br/>
        <Button variant="contained" type="submit">Submit</Button>
        <br/><br/>
        <h2>{msg}</h2>
      </form>
    </div>
  )
};

export default D4CE