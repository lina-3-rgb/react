import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import CowsBulls from '@pages/CowsBulls/cow';
import Guess from '@/pages/Guess/num';
import Matrisa from '@/pages/matrica/matrica';
import Matrica3x3 from '@/pages/Matrica3x3/Matrisa3'
import Matrisa4x4 from '@/pages/Matrisa4x4/Matrica4';
import Hello from "@/pages/Hello/Hello";

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="cow" element={<CowsBulls/>}/>
            <Route path="num" element={<Guess/>}/>
            <Route path="matrica" element={<Matrisa/>}/>
            <Route path ="Matrisa3" element={<Matrica3x3/>}/>
            <Route path ="Matrisa4" element={<Matrisa4x4/>}/>
            <Route path ="Hello" element={<Hello/>}/>
        </Route>
    </Routes>
};

export default AppRouter;