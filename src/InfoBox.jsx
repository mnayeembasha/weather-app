import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
export default function InfoBox({weatherInfo}) {
  const INIT_URL = 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  const HOT_URL = 'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  const COLD_URL = 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D';
  const RAIN_URL = 'https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D';


  // Humidity 80+ - Rain
  return (
    <div className="infoBox">
    <h2>WeatherInfo - {weatherInfo.weather} </h2>
    <div className="cardContainer">
      <Card className="card" sx={{ width: 450,height:370}}>
        <CardMedia
          sx={{ height: 180 }}
          image={ weatherInfo.humidity > 80 ? RAIN_URL : weatherInfo.temp > 15 ? HOT_URL: COLD_URL}
          title="green iguana"
        />
        <CardContent className="card-content black-gradient-content">
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold"}} className="card-title">
            {weatherInfo.city} &nbsp;&nbsp;
            {weatherInfo.humidity > 80 ? <ThunderstormIcon/> : weatherInfo.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span" className="card-body">
              <p>Temperature:{weatherInfo.temp}&deg;C</p>
              <p>Min-Temperature:{weatherInfo.tempMin}&deg;C</p>
              <p>Max-Temperature:{weatherInfo.tempMax}&deg;C</p>
              <p>Humidity:{weatherInfo.humidity}</p>
              <p>weather feels like:{weatherInfo.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
