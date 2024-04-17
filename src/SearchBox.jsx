import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    const [city,setCity] = useState("");
    const [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e613376e9955f6418119ae442fbbcfce";
    const getWeatherInfo = async()=>{
        // eslint-disable-next-line no-useless-catch
        try{
            let response = await fetch(`
            ${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
       try{
            event.preventDefault();
            setCity("");
            let newWeatherInfo = await getWeatherInfo();
            updateInfo(newWeatherInfo);
            setError(false);
       }
       catch(error){
        setError(true);
       }
    }
  return (
    <div className="searchBox">
      <h1 className="purple-gradient-text">Weather Widget App</h1>
      <form>
        <TextField id="city" label="Enter City Name" variant="outlined" value={city} onChange={handleChange}
           InputLabelProps={{
            sx: {
              color: 'purple',
            '&.Mui-focused':{
              color:'purple',
            },
            }
          }}
          sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'purple',
          },
          '&:hover fieldset': {
            borderColor: 'purple',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'purple',
          },
        },
        '& .MuiInputBase-input': {
          color: 'white',
        },
      }}
        />
        <Button
          id="search-btn"
          variant="contained"
          endIcon={<SearchIcon/>}
          type="submit"
          size="large"
          onClick={handleSubmit}
          sx={{
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: '#9c27b0',
        },
      }}
        >
          Search
        </Button>
        {error && <p>No such place exists</p>}
      </form>
    </div>
  );
}
