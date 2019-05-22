import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DefaultHeader from '../Header';
import Typography from '../../Typography';

const Master = ({
  Header,
  Footer,
  layoutProps: { headerProps, footerProps },
  title,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classNames(className, 'min-h-screen')} {...rest}>
      <Header {...headerProps} />
      <main className="min-h-main flex flex-col items-center w-full pb-6">
        {title && <Typography.Subtitle>{title}</Typography.Subtitle>}
        {children}
      </main>
      {Footer && <Footer {...footerProps} />}
    </div>
  );
};

Master.propTypes = {
  Header: PropTypes.elementType,
  Footer: PropTypes.elementType,
  layoutProps: PropTypes.shape({
    headerProps: PropTypes.object,
    footerProps: PropTypes.object,
  }),
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Master.defaultProps = {
  className: '',
  Header: DefaultHeader,
  Footer: null,
  layoutProps: {},
  title: '',
};

export default Master;
