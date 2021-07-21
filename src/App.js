import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Urun from './screens/Urun';
import { BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import CardScreen from './screens/CardScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from './redux/types';
import HeaderTwo from './components/HeaderTwo';
import Footer from './components/Footer';

const App=()=>{
  const dispatch=useDispatch()
  const modal=useSelector(state=>state.modal)
  const {modall}=modal

  //  useEffect(()=>{
    
  //   if(auth?.currentUser?.displayName){
  //      return auth.currentUser.displayName
  //   }
  //  },[dispatch,auth])
  return (
    <div className="App">
      <Router>
        {
     
     auth?.currentUser?.displayName ? <HeaderTwo/> : <Header/> 
        }
        {
         modall && (
           <div className="p">
           <p >Lütfen Login Olun.</p>
           <p onClick={()=>dispatch({
             type:TYPES.MODAL,payload:false
           })}>X</p>
           </div>
         )
        }
     <Route exact path="/login" component={LoginScreen}/>
     <Route exact path="/signup" component={SignupScreen}/>
     
     <div className="bar">
     <Sidebar/>

     <Switch>
     <Route exact path="/" component={Urun}/>
     <Route exact path="/detail/:id" component={DetailScreen}/>
     <Route exact path="/search" component={SearchScreen}/>
     <Route exact path="/card/:id?" component={CardScreen}/>
     </Switch>

     </div>

     <Footer/>
     </Router>
    </div>
  );
  }

export default App;
