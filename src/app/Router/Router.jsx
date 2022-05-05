import { Routes, Route } from 'react-router-dom';
import { routing } from './routesConstant';

export const Router = () => {
    return (
        <Router>
            {routing.map(el => {
                <Route
                    path={el.path}
                    element={el.element}
                />
            })}
        </Router>
    )
};