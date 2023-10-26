import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import NewFooter from '../components/NewFooter';

const Layout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <ResponsiveAppBar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      <NewFooter />
    </>
  );
};
export default Layout;
