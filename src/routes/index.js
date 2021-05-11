import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import store from "../redux/store/store";
import { useSelector } from 'react-redux';


function Routes() {
    const { pathname } = useLocation();
    const data = store.getState();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
   
    const accessToken = data?.LoginData?.loginSuccesData?.token
    let isUserLoggedIn
   if(accessToken){
      isUserLoggedIn = true;
   }
   else{
       isUserLoggedIn = false
   }
    
    return accessToken ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
