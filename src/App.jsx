import React,{ useState } from 'react'

import './App.css'

// firebase
import { db } from './services/firebase';
import { collection,addDoc } from 'firebase/firestore';

// material ui package
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";

function App() {

  const [subject, setSubject] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(subject !== ""){
      await addDoc(collection(db,"(default)"),{
        subject,
        completed:false
      })

      setSubject("")
    }
  }

  return (
   <>
      <Typography variant='h4' style={{padding:"20px", fontWeight:"700", textAlign:"center"}}>React Firebase CRUD</Typography>
      <div>
          <FormControl >
           
            {/* <InputLabel>Enter Subject:</InputLabel> */}
          <TextField type="text" label="Subject" fullWidth value={subject} onChange={((e) => setSubject(e.target.value))} />


          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </FormControl>
      </div>
   </>
  )
}

export default App
