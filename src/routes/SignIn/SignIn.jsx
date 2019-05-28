import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Button, Input, Master } from '../../components';
import { useForm } from '../../hooks';
import { createGuest } from '../../graphql/mutations';

const SignIn = ({ mutate }) => {
  const { getFieldProps, handleSubmit, errors, touched } = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      NIK: '',
      whomToSee: '',
    },
    validate: values => {
      const errors = {};
      switch (true) {
        case !values.firstName:
          errors.firstName = 'First Name is required';
          break;
        case values.firstName.length < 3:
          errors.firstName = 'First Name must have a length of at least 3';
          break;
        default:
          break;
      }
      switch (true) {
        case !values.email:
          errors.email = 'Email is required!';
          break;
        case !/.*@\w+\.\w{3}$/.test(values.email):
          errors.email = 'Email is not valid!';
          break;
        default:
          break;
      }
      switch (true) {
        case !values.company:
          errors.company = 'Company is required';
          break;
        default:
          break;
      }
      switch (true) {
        case !values.NIK:
          errors.NIK = 'NIK is required';
          break;
        default:
          break;
      }
      switch (true) {
        case !values.whomToSee:
          errors.whomToSee = 'Whom to see is required';
          break;
        default:
          break;
      }
      return errors;
    },
    onSubmit: async values => {
      await mutate({
        variables: {
          input: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            NIK: values.NIK,
            company: values.company,
          },
        },
      });
    },
  });
  return (
    <Master
      title="Enter Guest details to sign in"
      layoutProps={{ headerProps: { title: 'Company Name' } }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <section className="flex justify-center -mx-3">
          <Input
            className="px-3"
            fullWidth
            label="First Name"
            inputProps={{
              placeholder: 'Enter First name',
              ...getFieldProps('firstName'),
            }}
            error={touched.firstName && errors.firstName}
          />
          <Input
            className="px-3"
            label="Last name"
            fullWidth
            required={false}
            inputProps={{
              placeholder: 'Enter Last name',
              ...getFieldProps('lastName'),
            }}
          />
        </section>
        <Input
          label="Email"
          inputProps={{ placeholder: 'Enter email', ...getFieldProps('email') }}
          fullWidth
          error={touched.email && errors.email}
        />
        <Input
          label="NIK"
          inputProps={{ placeholder: 'Enter NIK', ...getFieldProps('NIK') }}
          fullWidth
          error={touched.NIK && errors.NIK}
        />
        <Input
          label="Company"
          inputProps={{
            placeholder: 'Enter Company name',
            ...getFieldProps('company'),
          }}
          fullWidth
          error={touched.company && errors.company}
        />
        <Input
          label="Who to see"
          inputProps={{
            placeholder: 'Enter Person name to see',
            ...getFieldProps('whomToSee'),
          }}
          fullWidth
          error={touched.whomToSee && errors.whomToSee}
        />
        <Button fullWidth className="mb-4" type="button">
          Take Photo
        </Button>
        <Button variant="primary" fullWidth className="mb-4">
          Sign In
        </Button>
      </form>
    </Master>
  );
};

SignIn.propTypes = {
  // withMutation injection
  mutate: PropTypes.func.isRequired,
};

SignIn.defaultProps = {};

export default graphql(gql(createGuest))(SignIn);
