'use client';

import { Form, Formik } from 'formik';

const SignInForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {() => <Form></Form>}
    </Formik>
  );
};

export default SignInForm;
