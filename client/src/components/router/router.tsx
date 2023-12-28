import { Routes,Route } from "react-router-dom"
import MainLayout from "../layouts/main_layout";
import Home from "../home/home";
import {MisdemeanourContainer} from "../misdemeanour/misdemeanour_container";
import Confessions from "../confessions/confessions";
import MessageContainer from "../message/message";

const pageNotFound:string = "Sorry! This page does not exist!!";

const Router:React.FC =() =>{
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="misdemeanours" element={<MisdemeanourContainer/>}/>
                <Route path="confession" element={<Confessions/>}/>
                <Route path="*" element={<MessageContainer message={pageNotFound}/>}/>

            </Route>
        </Routes>
        
    )
}
export default Router;