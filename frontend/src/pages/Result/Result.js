import React, { useEffect } from 'react'
import "./Result.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Result = ({ name, score }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!name) {
      navigate("/")
    }
  }, [name, navigate])

  return (
    <div className='result'>
      <span className='score'>Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  )
}

export default Result
