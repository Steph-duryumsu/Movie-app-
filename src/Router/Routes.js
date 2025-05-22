import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PageWrapper from '../components/PageWrapper';

const AppRouter = () => {
  return (
     <Router>
      <Routes>
        <Route path="/homepage" element={<PageWrapper><HomePage /></PageWrapper>} /> 
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><SignUp /></PageWrapper>} />
        <Route path='/' element={<PageWrapper><WelcomePage></WelcomePage></PageWrapper>}
        ></Route>
        
        {/* <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>}/> */}
      </Routes>
    </Router>
  )
}
export default AppRouter;