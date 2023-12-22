import { Routes,Route } from "react-router-dom"
import MainLayout from "../layouts/main_layout";
import Home from "../home/Home";
import Misdemeanour from "../misdemeanour/Misdemeanour";
import Confessions from "../confessions/Confessions";
import NotFound from "../notfound/NotFound";


const Router:React.FC =() =>{
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="misdemeanour" element={<Misdemeanour/>}/>
                <Route path="confession" element={<Confessions/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Route>
        </Routes>
        
    )
}
export default Router;