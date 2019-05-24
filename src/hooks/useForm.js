import { useReducer, useEffect } from 'react';
import { setNestedObjectValues, sleep } from '../components/utils/helpers';

const actions = {
  SET_FIELD_VALUE: 'SET_FIELD_VALUE',
  SET_FIELD_TOUCHED: 'SET_FIELD_TOUCHED',
  SET_ERRORS: 'SET_ERRORS',
  SUBMIT_BEGIN: 'SUBMIT_BEGIN',
  SUBMIT_FAILURE: 'SUBMIT_FAILURE',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FIELD_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };

    case actions.SET_FIELD_TOUCHED:
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      };
    case actions.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case actions.SUBMIT_BEGIN:
      return {
        ...state,
        isSubmitting: true,
        touched: setNestedObjectValues(state.values, true),
      };

    case actions.SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };

    case actions.SUBMIT_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submissionError: action.payload,
      };
    default:
      return state;
  }
};

const useForm = ({ initialValues, onSubmit, validate, delay = 500 }) => {
  const [state, dispatch] = useReducer(reducer, {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    submissionError: undefined,
  });

  // validation on the fly
  useEffect(() => {
    const errors = validate(state.values);
    dispatch({
      type: actions.SET_ERRORS,
      payload: errors,
    });
  }, [state.values]);

  const handleChange = name => e => {
    e.persist();
    dispatch({
      type: actions.SET_FIELD_VALUE,
      payload: {
        [name]: e.target.value,
      },
    });
  };
  const handleBlur = name => () => {
    dispatch({
      type: actions.SET_FIELD_TOUCHED,
      payload: {
        [name]: true,
      },
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({
      type: actions.SUBMIT_BEGIN,
    });
    const errors = validate(state.values);
    if (!Object.keys(errors).length) {
      try {
        await sleep(delay);
        await onSubmit();
        dispatch({ type: actions.SUBMIT_SUCCESS });
      } catch (error) {
        dispatch({ type: actions.SUBMIT_FAILURE, payload: error });
      }
    } else {
      dispatch({
        type: actions.SUBMIT_FAILURE,
        payload: 'Please correct the following inputs first!',
      });
      dispatch({ type: actions.SET_ERRORS, payload: errors });
    }
  };
  const getFieldProps = name => {
    return {
      onChange: handleChange(name),
      onBlur: handleBlur(name),
      value: state.values.name,
    };
  };

  return { getFieldProps, handleSubmit, ...state };
};

export default useForm;
