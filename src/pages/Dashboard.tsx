import React from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';

const Dashboard: React.FC = () => {
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
