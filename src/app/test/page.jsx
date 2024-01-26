'use client'
import { Autocomplete, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function test() {

  const [query, setQuery] = useState("AXIS");
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dev-trade.pocketful.in/api/open-apis/company/peerPerformance?startWith=${query}`);
        const data = response.data;
        setData(data?.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);


  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    }]
  const handleInputChange = (event, newValue) => {
    setQuery(newValue);
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Object.values(data?.companyName || {})}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            
            value={query}
            onChange={(e) => handleInputChange(e, e.target.value)}
          />
        )}
      />
     
      {
        data && data.map((da, id) => (
          <p key={id}>{da?.companyName}</p>
        ))
      }

    </div>
  )
}
