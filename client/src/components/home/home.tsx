import { useContext } from "react";
import { JusticeContext } from "../justiceContext";

const Home:React.FC = () =>{
    const contextObj = useContext(JusticeContext);


    return (
       <div className='home__text'>
            <h2 className='subtitle'>Welcome to the home of the Justice Department of Fakelandia.</h2>
            <p>Here you can browse a list of recent misdemeanours committed by our citizens, or you can cofess to your own misdemeanour.</p>    
            <em className="caption__text">Current number of misdemeanours: {contextObj.misdemeanourArray.length}</em>
      
       </div>
      
    )
}

export default Home;