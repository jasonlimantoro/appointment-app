import React from 'react';
import { Link } from '@reach/router';
import { Master, Card } from '../../components';

const Home = () => {
  return (
    <Master
      title="Enter Guest Details to"
      layoutProps={{ headerProps: { title: 'Company Name' } }}
    >
      <div className="flex flex-1 w-full">
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
    </Master>
  );
};

export default Home;
