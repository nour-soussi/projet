import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component";

function Details({Films}) {

const {id}=useParams();
const foundArticle=Films.find((elt)=>
elt.id==id
)
    return (
        <div className="container"
        style={{marginTop:'5%',
        }}>
        <h1><center> {foundArticle.title}</center> </h1>
        <br/><br/>
        
        <h3>watch trailer</h3>
        <iframe style={{ width:500 , height:300}} src={foundArticle.trailerLink} frameBorder='0' allowfullscreen > </iframe>
        <ReactStars
        value={foundArticle.rate}
            edit={false}
        count={5}
        size={24}
        activeColor="#ffd700"
    />
        <h3>description</h3>
        <div>{foundArticle.decription}</div>
        <br/><br/>
        <Link to="/">
        <Button variant="primary">go back</Button>
        </Link>

            </div>
        );
    }
    
    export default Details;