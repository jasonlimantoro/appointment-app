/* eslint no-param-reassign: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultComponentMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  a: 'a',
};

const Typography = ({ component, className, inline, ...rest }) => {
  const Component = component || defaultComponentMapping[component] || 'span';
  return (
    <Component
      className={classNames(className, { 'inline-block': inline })}
      {...rest}
    />
  );
};

Typography.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

Typography.defaultProps = {
  inline: false,
};

const defineNestedComponent = RootComponent => nest => finalComponent => {
  const getDisplayName = WrappedComponent => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  };
  RootComponent[nest] = finalComponent;
  RootComponent[nest].displayName = `${getDisplayName(RootComponent)}.${nest}`;
  // not sure why RootComponent.propTypes is undefined
  // Currently, storybook cannot detect the compound component's full propTypes because of that
  RootComponent[nest].propTypes = RootComponent.propTypes;
  RootComponent[nest].defaultProps = RootComponent.defaultProps;
};

const root = defineNestedComponent(Typography);
root('Title')(({ ...props }) => <Typography component="h1" {...props} />);
root('Subtitle')(({ ...props }) => <Typography component="h2" {...props} />);
root('Paragraph')(({ ...props }) => <Typography component="p" {...props} />);

export default Typography;
