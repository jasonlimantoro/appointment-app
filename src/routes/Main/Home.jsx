import React from 'react';
import { Link } from '@reach/router';
import { Header, Card, Typography } from '../../components';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header title="Company Name" />
      <main className="min-h-main flex flex-col pb-6">
        <Typography.Subtitle className="text-center">
          Enter Guest details to
        </Typography.Subtitle>
        <div className="flex flex-1">
          <Card
            className="flex-1 mx-6"
            variant="primary"
            component={Link}
            to="/sign-in"
          >
            Sign In
          </Card>
          <Card className="flex-1 mx-6" component={Link} to="/sign-out">
            Sign out
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
