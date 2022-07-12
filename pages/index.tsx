import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { FullScreenLoading } from '../components/ui';
import { DashboardPage } from './admin';
import { Layout } from '../components/layouts';


const HomePage: NextPage = () => {

  // const { products, isLoading } = useProducts('/products');

  return (
    <>
      {
        false
          ? <FullScreenLoading />
          : <DashboardPage />
      }
    </>
  );
}

export default HomePage