import {Link} from "react-router-dom";
import image from '../Images/agileFour.png';



const AgileValues = () => {
    return (
      <div>
        
        <img className = "agileImg" src={image} alt="" />
        <Link to="/">Go Back</Link>
      </div>
    )
  }

  export default AgileValues

