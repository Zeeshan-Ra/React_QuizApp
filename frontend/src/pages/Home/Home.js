import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    }
    else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz')
    }
  }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>


        <div className='settings__select'>
          {error && <ErrorMessage>Please Fill all the fields.</ErrorMessage>}
          <TextField style={{ marginBottom: 20 }} label="Enter Your Name" variant='outlined' onChange={(e) => setName(e.target.value)} />

          <TextField style={{ marginBottom: 20 }} select label='Select Category' variant='outlined' onChange={(e) => setCategory(e.target.value)} value={category}>
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }
          </TextField>

          <TextField select label="Select Difficulty" variant="outlined" style={{ marginBottom: 30 }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>
        </div>

      </div>


      <img src='/quiz.svg' alt='quiz' className='banner' />
    </div>
  )
}

export default Home
