import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import CowsBulls from '@pages/CowsBulls/cow';
import Guess from '@/pages/Guess/num';

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="cow" element={<CowsBulls/>}/>
            <Route path="num" element={<Guess/>}/>
        </Route>
    </Routes>
};

export default AppRouter;