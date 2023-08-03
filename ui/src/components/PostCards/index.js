import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';



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

const PostCards = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

const posts = [
  {
		"id": 1,
		"userId": 21,
		"title": "Ms",
		"description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
		"canDesign": null,
        "isDesignRequired": +true,
		"designUrl": "http://vistaprint.com/porta/volutpat/quam/pede/lobortis.jsp?ut=proin&blandit=risus",
		"timeframe": "3/25/9606",
		"quantity": 90,
		"country": "Qatar",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "9/14/2023",
        "type": "request"
    },
	{
		"id": 2,
		"userId": 22,
		"title": "Honorable",
		"description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
		"canDesign": null,
        "isDesignRequired": +false,
		"designUrl": "https://google.com.hk/dui/luctus/rutrum/nulla/tellus/in/sagittis.jpg?vel=non&lectus=ligula&in=pellentesque&quam=ultrices&fringilla=phasellus&rhoncus=id&mauris=sapien&enim=in&leo=sapien&rhoncus=iaculis&sed=congue&vestibulum=vivamus&sit=metus&amet=arcu&cursus=adipiscing&id=molestie&turpis=hendrerit&integer=at&aliquet=vulputate&massa=vitae&id=nisl&lobortis=aenean&convallis=lectus&tortor=pellentesque&risus=eget&dapibus=nunc&augue=donec&vel=quis&accumsan=orci&tellus=eget&nisi=orci&eu=vehicula&orci=condimentum",
		"timeframe": "1/25/3195",
		"quantity": 7,
		"country": "China",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "11/6/2023",
        "type": "request"
    },
	{
		"id": 3,
		"userId": 23,
		"title": "Ms",
		"description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
		"canDesign": null,
        "isDesignRequired": +false,
		"designUrl": "http://cafepress.com/vel/nisl/duis/ac/nibh/fusce/lacus.json?leo=potenti&odio=cras&porttitor=in&id=purus&consequat=eu&in=magna&consequat=vulputate&ut=luctus&nulla=cum&sed=sociis&accumsan=natoque&felis=penatibus&ut=et&at=magnis&dolor=dis&quis=parturient&odio=montes&consequat=nascetur&varius=ridiculus&integer=mus&ac=vivamus&leo=vestibulum&pellentesque=sagittis&ultrices=sapien&mattis=cum&odio=sociis&donec=natoque&vitae=penatibus&nisi=et&nam=magnis&ultrices=dis&libero=parturient&non=montes&mattis=nascetur&pulvinar=ridiculus&nulla=mus&pede=etiam",
		"timeframe": "9/26/8722",
		"quantity": 1,
		"country": "Colombia",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "11/28/2023",
        "type": "request"
    },
	{
		"id": 4,
		"userId": 24,
		"title": "Mr",
		"description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
		"canDesign": null,
        "isDesignRequired": +false,
		"designUrl": "http://mapy.cz/nec/nisi/volutpat.jpg?posuere=vestibulum&metus=ante&vitae=ipsum&ipsum=primis&aliquam=in&non=faucibus&mauris=orci",
		"timeframe": "3/22/8918",
		"quantity": 98,
		"country": "Indonesia",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "12/26/2023",
        "type": "request"
    },
	{
		"id": 5,
		"userId": 25,
		"title": "Dr",
		"description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
		"canDesign": null,
        "isDesignRequired": +false,
		"designUrl": "https://123-reg.co.uk/at/velit.png?rhoncus=nisl&dui=aenean&vel=lectus&sem=pellentesque&sed=eget&sagittis=nunc&nam=donec&congue=quis&risus=orci&semper=eget&porta=orci&volutpat=vehicula&quam=condimentum&pede=curabitur&lobortis=in&ligula=libero&sit=ut&amet=massa&eleifend=volutpat&pede=convallis&libero=morbi&quis=odio&orci=odio&nullam=elementum&molestie=eu&nibh=interdum&in=eu&lectus=tincidunt&pellentesque=in&at=leo&nulla=maecenas&suspendisse=pulvinar&potenti=lobortis&cras=est&in=phasellus&purus=sit&eu=amet&magna=erat&vulputate=nulla&luctus=tempus&cum=vivamus&sociis=in&natoque=felis&penatibus=eu&et=sapien&magnis=cursus&dis=vestibulum&parturient=proin&montes=eu&nascetur=mi&ridiculus=nulla&mus=ac&vivamus=enim&vestibulum=in&sagittis=tempor&sapien=turpis&cum=nec&sociis=euismod&natoque=scelerisque&penatibus=quam&et=turpis&magnis=adipiscing&dis=lorem&parturient=vitae&montes=mattis&nascetur=nibh&ridiculus=ligula&mus=nec&etiam=sem&vel=duis&augue=aliquam&vestibulum=convallis&rutrum=nunc&rutrum=proin&neque=at&aenean=turpis&auctor=a&gravida=pede&sem=posuere&praesent=nonummy&id=integer&massa=non&id=velit&nisl=donec&venenatis=diam&lacinia=neque",
		"timeframe": "4/27/4783",
		"quantity": 21,
		"country": "Indonesia",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "8/23/2023",
        "type": "request"
    },
	{
		"id": 6,
		"userId": 26,
		"title": "Mrs",
		"description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
		"canDesign": null,
        "isDesignRequired": +false,
		"designUrl": "http://virginia.edu/elementum/in/hac/habitasse/platea.json?sit=vel&amet=nisl&diam=duis&in=ac&magna=nibh&bibendum=fusce&imperdiet=lacus&nullam=purus&orci=aliquet&pede=at&venenatis=feugiat&non=non&sodales=pretium&sed=quis&tincidunt=lectus&eu=suspendisse&felis=potenti&fusce=in&posuere=eleifend&felis=quam&sed=a&lacus=odio&morbi=in&sem=hac&mauris=habitasse&laoreet=platea&ut=dictumst&rhoncus=maecenas&aliquet=ut&pulvinar=massa&sed=quis&nisl=augue&nunc=luctus&rhoncus=tincidunt",
		"timeframe": "1/11/5074",
		"quantity": 80,
		"country": "Poland",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "7/26/2023",
        "type": "request"
    },
	{
		"id": 7,
		"userId": 27,
		"title": "Dr",
		"description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
		"canDesign": null,
        "isDesignRequired": +true,
		"designUrl": "http://blinklist.com/curabitur/at/ipsum/ac/tellus.js?metus=posuere&vitae=metus&ipsum=vitae&aliquam=ipsum&non=aliquam&mauris=non&morbi=mauris&non=morbi&lectus=non&aliquam=lectus&sit=aliquam&amet=sit&diam=amet&in=diam&magna=in&bibendum=magna&imperdiet=bibendum&nullam=imperdiet&orci=nullam&pede=orci&venenatis=pede&non=venenatis&sodales=non&sed=sodales&tincidunt=sed&eu=tincidunt&felis=eu&fusce=felis&posuere=fusce&felis=posuere&sed=felis&lacus=sed&morbi=lacus&sem=morbi&mauris=sem&laoreet=mauris&ut=laoreet&rhoncus=ut&aliquet=rhoncus&pulvinar=aliquet&sed=pulvinar&nisl=sed&nunc=nisl&rhoncus=nunc&dui=rhoncus&vel=dui&sem=vel&sed=sem&sagittis=sed&nam=sagittis&congue=nam&risus=congue",
		"timeframe": "8/23/3873",
		"quantity": 75,
		"country": "China",
		"maxHeight": null,
		"maxWidth": null,
		"maxDepth": null,
		"maxPrecision": null,
        "createdAt": "5/15/2023",
        "type": "request"
    }
]



    return(
      <Card sx={{ maxWidth: 600 }}>
      <Link to='/posts/:id'>
        <Button sx={{ color:"black", textDecoration: "none"}}>
      <CardHeader
        title={posts.title}
        subheader={posts.createdAt}
      />
      </Button>
      </Link>
     
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          {posts.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {posts.isDesignRequired}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {posts.designUrl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {posts.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {posts.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       {/* button to expand post and show comments */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>@RandomUserGuy: The comments will go here!</Typography>
          <Divider/>
        </CardContent>
      </Collapse>
    </Card> 
  );

}

 export default PostCards;