import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch, Route } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { NoneApplicationTemplate } from './templates/NoneApplicationTemplate/NoneApplicationTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import  CheckoutTemplate  from './templates/CheckoutTemplate/CheckoutTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import AddUser from './pages/Admin/Dashboard/AddUser/AddUser';
import NotFound from './pages/NotFound/NotFound';
import ModalTrailer from './components/ModalTrailer/index';
import { Suspense, lazy } from 'react'
import EditUser from './pages/Admin/Dashboard/EditUser/EditUser';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <ModalTrailer />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <NoneApplicationTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <NoneApplicationTemplate path="/detail/:id" exact Component={Detail} />
        <NoneApplicationTemplate path="/profile" exact Component={Profile} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime} />

        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        <AdminTemplate path="/admin/users/edit/:taiKhoan" exact Component={EditUser} />
        <AdminTemplate path="/admin/users/addnew" exact Component={AddUser} />
        <AdminTemplate path="/admin/showtimes" exact Component={Showtime} />
        <HomeTemplate path="/" exact Component={Home} />
        <Route component={NotFound} />
       
      </Switch>
      <ToastContainer  />
    </Router>
  );
}

export default App;
