import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Imagenewscol1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title="Sex Scandal: प्रज्वल रेवन्ना के खिलाफ कितने केस हैं, क्या आरोप हैं और कौन सी धाराएं लगी हैं? सभी सवालों के जवाब"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="assets/images/prajwal-revanna-310608872-16x9.avif"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        दुष्कर्म और यौन शोषण का आरोपी प्रज्वल रेवन्ना जर्मनी से लौट आया है. अब यह सवाल पूछे जा रहे हैं कि अगर प्रज्वल रेवन्ना दोषी सिद्ध हो जाता है तो उसे कितनी सजा होगी. साथ ही रेवन्ना पर अब तक कितने...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detailed news</Typography>
          यौन शोषण और सेक्स स्कैंडल के आरोपों में घिरा जेडीएस से निष्कासित हासन सीट से सांसद प्रज्वल रेवन्ना भारत लौट आया है. 35 दिन बाद जर्मनी से लौटे रेवन्ना ... https://www.aajtak.in/india/news/story/prajwal-revanna-arrested-rape-accused-sections-punishment-provision-ntc-1955091-2024-05-31
        </CardContent>
      </Collapse>
    </Card>
  );
}