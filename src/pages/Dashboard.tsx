import React from 'react';
import { useSelector } from 'react-redux';
import { Info, Navbar, Repos, Search, User } from '../components';

const Dashboard: React.FC = () => {
  const githubRequests = useSelector((state: any) => state.githubRequests);

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
