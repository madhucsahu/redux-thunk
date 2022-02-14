import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import{useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:100,
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const AddUser = () => {
    const classes =useStyles();
    const[state,setState]=useState({
        name:"",
        address:"",
        email:"",
        contact:"",
    });
const[error,setError]=useState("");

    let navigate =useNavigate();
    let dispatch = useDispatch();
    const{name,address,email,contact}=state;
    const handleInputChange = (e)=>{
        let{name,value}= e.target;
        setState({...state,[name]:value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !address || !email || !contact){
            setError("please input all input Field");
        }else{
            dispatch(AddUser(state));
            navigate("/");
            setError("");
        }
    };
  return (
    <div>
    <Button
        styles={{width:"100px",marginTop:"20px"}}
        variant="contained"
        colors="secondary "
        type="submit"
        onClick={()=>navigate("/")}
        >
        Go Back
    </Button>
    <h2>Add User</h2>
    {error && <h3 style={{color:"red"}}>{error}</h3>}
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" value={name} name="name" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Address" value={address} name="address" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Email" value={email}name="email" type="email" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Contact"value={contact}name="contact" type="number" onChange={handleInputChange}/> 
      <br/>
      <Button style={{width:"100px"}}variant="contained" color="primary" type="submit" onChange={handleInputChange}>Submit</Button>
    
    </form>
    </div>
  )
}

export default AddUser