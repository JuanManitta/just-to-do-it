import React from 'react'
import { JustTodoIt } from '../pages/JustTodoIt';
import { Route, Routes, Navigate } from 'react-router';

export const JustTaskItRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<JustTodoIt/>} />
        <Route path="/*" element={<Navigate to ="/" />} />
    </Routes>
  )
}
