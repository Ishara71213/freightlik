import './App.css';
import {createBrowserRouter,createRoutesFromElements,Navigate,Route, RouterProvider } from 'react-router-dom'

//pages
import { LoginPage } from './components/LoginRegister/LoginPage';
import { UserProfileNetwork } from './components/userprofile/UserProfileNetwork/UserProfileNetwork';
import { UserProfilePortal} from './components/userprofile/UserProfilePortal/UserProfilePortal';
//layouts
// import RootLayout from './layouts/RootLayout';

const currentUser=true;

const RequireAuth =(({children})=>{
  return currentUser ? children : <Navigate to="/"/>;
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<LoginPage/>}/>
        <Route path='/userprofilenetwork' element={<RequireAuth><UserProfileNetwork/></RequireAuth>}/>
        <Route path='/userprofilePortal' element={<RequireAuth><UserProfilePortal/></RequireAuth>}/>
      
    </Route>
  )
)  

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
