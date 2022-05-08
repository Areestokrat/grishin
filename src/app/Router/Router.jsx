import { Routes, Route } from 'react-router-dom';
import Main from '../../modules/Main';
import { routing } from './routesConstant';

export const Router = () => {
    console.log(routing)
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            {routing.map(el => {
                <Route
                    path={el.path}
                    element={el.element}
                />
            })}
        </Routes>
    )
};