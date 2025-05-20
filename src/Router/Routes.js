import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
im
import SignUp from '../pages/SignUp';
import PageWrapper from '../components/PageWrapper';

const AppRouter = () => {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><SignUp /></PageWrapper>} />

        {/* <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>}/> */}
      </Routes>
    </Router>
  )
}
export default AppRouter;