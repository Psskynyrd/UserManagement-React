import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { _404NotFound } from '../pages/ErrorPages'
import ErrorHandler from '../components/ErrorHandler/ErrorHandler';
import routeItems from "./routes"
import FullPageLoading from '../components/Loading/FullPageLoading';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Toaster position="top-center" reverseOrder={false} />
            <ErrorHandler />
            <Routes>

                {routeItems.map((route, idx) => (
                    <Route key={idx} path={route.path} element={resolveRouteComponent(route)} />
                ))}

                <Route path="*" element={<_404NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;