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
  const [submitText, setSubmitText] = useState("Submit")

  const deleteData = (id) => {
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitText("Submitting...")
    if(subject !== ""){
      try{
        await addDoc(collection(db,"cache_test"),{
          subject,
          completed:false
        })

        setSubmitText("Submit")


        setSubject("")
      }
      catch(error){
       alert(error)
      }

    }
    else{
      alert("Subject Cannot be empty")
    }
  }

  return (
   <>
      <Typography variant='h4' style={{padding:"20px", fontWeight:"700", textAlign:"center"}}>React Firebase CRUD</Typography>
      <div style={{display:"flex", justifyContent:"center"}}>
          <FormControl >
           
            {/* <InputLabel>Enter Subject:</InputLabel> */}
          <TextField type="text" label="Subject" fullWidth value={subject} onChange={((e) => setSubject(e.target.value))} />

          <br />
          <Button variant="contained" style={{display:"inline"}} onClick={handleSubmit}>{submitText}</Button>
          </FormControl>
      </div>


      
   </>
  )
}

export default App
