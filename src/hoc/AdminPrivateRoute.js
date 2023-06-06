import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { checkAdminRole } from "../utils/checkAdminRole";
import { checkOwnerRole } from "../utils/checkOwnerRole";
import { checkSellerRole } from "../utils/checkSellerRole";


function AdminPrivateRoute({ roleName }) {
    const currentUser = useSelector((state) => state.auth.login?.currentUser);
    const role = currentUser.userDtoResponse.userRoleDtos[0].roleDtoResponse.name;
    const isAdmin = checkAdminRole(role);
    if (roleName && !isAdmin) return <Navigate to="/dashboard/app" />;
    return currentUser ? <Outlet /> : <Navigate to="/center" />;
}

export default AdminPrivateRoute;