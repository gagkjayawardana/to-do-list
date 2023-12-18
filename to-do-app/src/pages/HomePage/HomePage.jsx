import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { ToDoData } from '../../utils/toDoData';
import ToDoCard from '../../components/ToDoCard/TodoCard';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../../redux/todoSlice';

const Home_Contain = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-image: linear-gradient(to bottom right, #0000ff, #e6e6ff);
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
  padding: 20px 20px 40px 20px;
`;

const Err_Msg = styled.span`
  color: #800000;
`;

const ToDo_list_container = styled.div`
  width: 100%;
  height: fit-content;
`;

const ToDo_List = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-left: -20px;
  padding-bottom: 20px;
`;

const ToDo_Filter = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
`;

function HomePage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  const [focusSubmitField, setFocusSubmitField] = useState(false);
  const [data, setData] = useState([...todos]);
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = data.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  const hadleSubmitField = () => {
    setFocusSubmitField(true);
  };

  const initialValues = {
    title: '',
    deadline: '',
    priority: ''
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required('Required'),
    deadline: yup.date().nullable().min(new Date(), 'Deadline must be after today'),
    priority: yup.string()
  });

  const onSubmit = (e) => {
    const title = e.title;
    const deadline = e.deadline;
    const priority = e.priority;

    const newTodo = {
      userId: 3,
      id: todos.length + 1,
      title,
      completed: false,
      deadline,
      priority
    };

    dispatch(addTodo(newTodo));
    setData((prevData) => [...prevData, newTodo]);

    e.title = '';
    e.deadline = '';
    e.priority = '';
  };

  const onEdit = (id, updatedTodo) => {
    dispatch(editTodo({ id, updatedTodo }));

    setData((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
    const updatedToDoData = ToDoData.filter((todo) => todo.id !== id);
    setData(updatedToDoData);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify({ data }));
  }, [data]);
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
              {focusSubmitField && (
                <div>
                  <Field
                    as={TextField}
                    name="deadline"
                    sx={{
                      width: '75%',
                      marginTop: '10px',
                      '@media (max-width: 600px)': {
                        width: '100%'
                      }
                    }}
                    variant="filled"
                    type="date"
                    helperText={
                      <ErrorMessage name="deadline" render={(msg) => <Err_Msg>{msg}</Err_Msg>} />
                    }
                  />
                  <FormHelperText style={{ color: '#e6e6e6', marginLeft: '15px' }}>
                    Deadline
                  </FormHelperText>

                  <FormControl
                    sx={{
                      width: '50%',
                      '@media (max-width: 600px)': {
                        width: '100%'
                      }
                    }}
                    variant="filled">
                    <InputLabel
                      sx={{
                        color: '#e6e6e6'
                      }}>
                      Priority
                    </InputLabel>
                    <Field
                      as={Select}
                      name="priority"
                      inputProps={{
                        style: {
                          color: '#e6e6e6'
                        }
                      }}>
                      <MenuItem value="high">High</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="low">Low</MenuItem>
                    </Field>
                  </FormControl>
                </div>
              )}
              <Button
                sx={{
                  width: '100px',
                  height: '50px',
                  backgroundColor: '#000099',
                  '&:hover': { backgroundColor: '#6666ff' },
                  textTransform: 'none',
                  marginLeft: focusSubmitField ? '0' : '30px',
                  marginTop: focusSubmitField ? '10px' : '5px',
                  '@media (max-width: 600px)': {
                    marginLeft: '0'
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
      <ToDo_list_container>
        <Typography
          sx={{
            color: '#ffffff',
            marginTop: '20px',
            marginLeft: '20px',
            '@media (max-width: 600px)': {
              fontSize: '15pt'
            }
          }}
          variant="h4"
          gutterBottom>
          ToDo List
        </Typography>
        <ToDo_Filter>
          <Button
            sx={{ backgroundColor: filter === 'all' ? '#000099' : '#0000e6' }}
            variant="contained"
            onClick={() => handleFilterChange('all')}>
            All
          </Button>
          <Button
            sx={{
              backgroundColor: filter === 'completed' ? '#000099' : '#0000e6',
              marginLeft: '10px'
            }}
            variant="contained"
            onClick={() => handleFilterChange('completed')}>
            Completed
          </Button>
          <Button
            sx={{
              backgroundColor: filter === 'active' ? '#000099' : '#0000e6',
              marginLeft: '10px'
            }}
            variant="contained"
            onClick={() => handleFilterChange('active')}>
            Active
          </Button>
        </ToDo_Filter>
      </ToDo_list_container>
      <ToDo_List>
        {filteredData.map((element, index) => {
          return (
            <div key={`card-${index}`}>
              <ToDoCard
                userId={element.userId}
                id={element.id}
                title={element.title}
                completed={element.completed}
                deadline={element.deadline}
                priority={element.priority}
                onEdit={() => onEdit(element.id, { completed: !element.completed })}
                onDelete={() => onDelete(element.id)}
              />
            </div>
          );
        })}
      </ToDo_List>
    </Home_Contain>
  );
}

export default HomePage;
