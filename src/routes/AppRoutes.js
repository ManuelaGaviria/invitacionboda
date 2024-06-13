import {Route,Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WeddingInvitation from "../components/WeddingInvitation";
import Boda from "../pages/Boda";

function AppRoutes() {
    const location = useLocation();
  return (
    <>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<WeddingInvitation></WeddingInvitation>}></Route>
                <Route exact path="/invitacion" element={<Boda></Boda>}></Route>
            </Routes>
        </AnimatePresence>
    </>
    
  )
}

export default AppRoutes