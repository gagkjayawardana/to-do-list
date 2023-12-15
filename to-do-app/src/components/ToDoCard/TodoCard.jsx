import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoCard({ userId, id, title, completed }) {
  return (
    <div className="toDoCard">
      <Card sx={{ width: '20%' }}>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            User ID: {userId}
          </Typography>
          <Typography variant="h7" gutterBottom>
            ID: {id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Title: {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            completed: {completed}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <ModeEditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default ToDoCard;
