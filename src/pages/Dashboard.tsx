import React from 'react';
import { useSelector } from 'react-redux';
import loadingImage from '../images/preloader.gif';
import { Info, Navbar, Repos, Search, User } from '../components';
import { LoadingModel } from '../models/interface-models';

interface LoadingState {
  loading: LoadingModel;
}

const Dashboard: React.FC = () => {
  const loading = useSelector((state: LoadingState) => state.loading);

  if (loading.isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loading' />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
