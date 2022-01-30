import { Navigate, Outlet } from "react-router-dom";

export default function PublicRouter(){
    const signed = false;

    return !signed ? <Outlet/> : <Navigate to="/home"/>
}