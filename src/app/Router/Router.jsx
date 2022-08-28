import { Routes, Route } from 'react-router-dom';
import { routing } from './routesConstant';

export const Router = () => {
    return (
        <Routes>
            {routing.map((el, i) => 
                (<Route
                    key={i}
                    path={el.path}
                    element={el.element}
                />)
            )}
        </Routes>
    )
};