import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const Login_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-image: linear-gradient(to bottom right, #0000ff, #e6e6ff);
  padding-top: 100px;
`;

const Login_Container = styled.div`
  width: 40%;
  height: 450px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px 20px 20px 20px;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Login_Form = styled.div`
  padding-top: 20px;
`;

const Form_content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Err_Msg = styled.span`
  color: #800000;
`;

function LoginPage() {
  const initialValues = {
    userName: '',
    password: ''
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required('Required'),
    password: yup.string().required('Required')
  });
  const onSubmit = (e) => {
    const userName = e.userName;
    const password = e.password;
    console.log('userName', userName);
    console.log('password', password);

    e.userName = '';
    e.password = '';
  };
  return (
    <Login_Page>
      <Login_Container>
        <div className="loginHeader">
          <Typography sx={{ color: '#ffffff' }} variant="h3" gutterBottom>
            Sign In
          </Typography>
        </div>
        <Login_Form>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
              <Form_content>
                <Field
                  as={TextField}
                  name="userName"
                  InputLabelProps={{
                    style: {
                      color: '#e6e6e6'
                    }
                  }}
                  label="Username"
                  variant="filled"
                  fullWidth
                  helperText={
                    <ErrorMessage name="userName" render={(msg) => <Err_Msg>{msg}</Err_Msg>} />
                  }
                />
                <Field
                  as={TextField}
                  name="password"
                  InputLabelProps={{
                    style: {
                      color: '#e6e6e6'
                    }
                  }}
                  label="Password"
                  type="password"
                  variant="filled"
                  fullWidth
                  helperText={
                    <ErrorMessage name="password" render={(msg) => <Err_Msg>{msg}</Err_Msg>} />
                  }
                />
                <Button
                  sx={{
                    width: '100%',
                    backgroundColor: '#000066',
                    '&:hover': { backgroundColor: '#6666ff' },
                    textTransform: 'none'
                  }}
                  type="submit"
                  variant="contained">
                  Login
                </Button>
              </Form_content>
            </Form>
          </Formik>
        </Login_Form>
      </Login_Container>
    </Login_Page>
  );
}

export default LoginPage;
