import { Routes, Route, Navigate } from 'react-router';
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JustTaskItRoutes } from '../ui/routes/JustTaskItRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken()
  }, []);


 

    //TODO: ADD A LOADING SCREEN
  return (
    <Routes>
        {
            status === 'authenticated'
            ? <Route path="/*" element={<JustTaskItRoutes/>} />
            : <Route path = "/auth/*" element={<AuthRoutes/>} />
        }
        <Route path="/*" element={<Navigate to ="/auth/login" />} />
    </Routes>
  )
}
