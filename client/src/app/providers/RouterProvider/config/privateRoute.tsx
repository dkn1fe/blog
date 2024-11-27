import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getIsAuthFromLocalStorage } from "@/shared/helpers/localStorage.helper.ts";

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = getIsAuthFromLocalStorage();
    return isAuth ? children : <Navigate to="/auth/login" />;
};