import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkRequests } from '../redux/actions/requestsActions';
import { Info, Navbar, Repos, Search, User } from '../components';

const Dashboard: React.FC = () => {
  const githubRequests = useSelector((state: any) => state.githubRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkRequests());
  }, [dispatch]);

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
