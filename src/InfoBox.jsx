import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import './InfoBox.css';
export default function InfoBox({ Info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYXRoZXJ8ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080";
    const HOT_URL = "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhcm18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&crop=entropy&q=80";
    const COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    

    return (
        <div className="InfoBox">
            <h3 style={{fontFamily: "Arial, sans-serif"}}>Weather Information</h3>
            <br /> <br />
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 560 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Info.humidity > 80 ? RAIN_URL : Info.temperature > 15 ? HOT_URL :COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Info.city} &nbsp;{Info.humidity > 80 ? <ThunderstormIcon /> : Info.temperature > 15 ? <FlareIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}  component="span">
                        <p>Temperature : {Info.temperature}&deg;C</p>
                        <p>Humidity : {Info.humidity}</p>
                        <p>Description : {Info.description}</p>
                        <p>WindSpeed : {Info.windSpeed}</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}