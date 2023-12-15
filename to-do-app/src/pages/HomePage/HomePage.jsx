import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const Home_Contain = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-image: linear-gradient(#0000ff, #e6e6ff);
`;

const Home_Header = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
`;

const Submit_Card = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 20px 20px 20px;
`;

const Err_Msg = styled.span`
  color: #800000;
`;

function HomePage() {
  const [focusSubmitField, setFocusSubmitField] = useState(false);

  const hadleSubmitField = () => {
    setFocusSubmitField(true);
  };

  const initialValues = {
    title: ''
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required('Required')
  });
  const onSubmit = (e) => {
    const title = e.title;
    console.log('Title', title);

    e.title = '';
  };
  return (
    <Home_Contain>
      <Home_Header>
        <Typography
          sx={{
            color: '#ffffff',
            '@media (max-width: 600px)': {
              fontSize: '20pt',
              marginTop: '10px'
            }
          }}
          variant="h3"
          gutterBottom>
          ToDo Home
        </Typography>
        <Button
          sx={{
            width: '100px',
            height: '50px',
            backgroundColor: '#000066',
            '&:hover': { backgroundColor: '#6666ff' },
            textTransform: 'none'
          }}
          variant="contained">
          Sign Out
        </Button>
      </Home_Header>
      <Submit_Card>
        <Typography
          sx={{
            color: '#ffffff',
            '@media (max-width: 600px)': {
              fontSize: '15pt'
            }
          }}
          variant="h4"
          gutterBottom>
          Submit New
        </Typography>
        <div className="submitForm">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
              <Field
                as={TextField}
                name="title"
                label="Title"
                onFocus={hadleSubmitField}
                sx={{
                  width: focusSubmitField ? '75%' : '25%',
                  '@media (max-width: 600px)': {
                    width: '100%'
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: '#e6e6e6'
                  }
                }}
                variant="filled"
                helperText={
                  <ErrorMessage name="title" render={(msg) => <Err_Msg>{msg}</Err_Msg>} />
                }
              />
              <Button
                sx={{
                  width: '100px',
                  height: '50px',
                  backgroundColor: '#000099',
                  '&:hover': { backgroundColor: '#6666ff' },
                  textTransform: 'none',
                  marginLeft: '30px',
                  marginTop: '5px',
                  '@media (max-width: 600px)': {
                    marginLeft: '0',
                    marginTop: '10px'
                  }
                }}
                variant="contained"
                type="submit">
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </Submit_Card>
    </Home_Contain>
  );
}

export default HomePage;
