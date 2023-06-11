import {Typography,Stack,Paper} from "@mui/material";

export default function HeroComponents(){
    return(

<Stack sx={{
    width:500,
    height:250,
    border:1,
    margin:20,
}}>
    <Paper/>
    <Typography variant="h3" component="div"  sx={{fontFamily:"poppins",textAlign:"left"}}> Komunitas Gajdah Mada Untuk Kerja Sama Berkelanjutan</Typography>
<Typography variant="caption" component="div" > Komunitas gajdah mada ipsum loremad;laskdlsakdjaskdl
    jsadjhoiahfasdhhsdfhskjdfhlksdhlksdhfkldshlfkdhsklfhdsklfjhlksdfkldsklfjd
    skljfdskljfdskljklf</Typography>

</Stack>
    )
}