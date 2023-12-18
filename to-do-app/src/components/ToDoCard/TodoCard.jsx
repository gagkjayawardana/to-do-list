import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from '@mui/material/Checkbox';

function ToDoCard({ userId, id, title, completed, deadline, priority, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCompleted, setEditedCompleted] = useState(completed);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, { completed: editedCompleted });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedCompleted(completed);
  };

  const handleCheckboxChange = (event) => {
    setEditedCompleted(event.target.checked);
  };
  return (
    <div className="toDoCard">
      <Card sx={{ width: '250px', marginTop: '20px', marginLeft: '20px' }}>
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
          <Typography variant="body2" gutterBottom>
            Deadline: {deadline}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Priority: {priority}
          </Typography>
          {isEditing ? (
            <div>
              <Checkbox checked={editedCompleted} onChange={handleCheckboxChange} />
              <Typography variant="body2" gutterBottom>
                Completed: {editedCompleted ? 'True' : 'False'}
              </Typography>
            </div>
          ) : (
            <Typography variant="body2" gutterBottom>
              Completed: {completed ? 'True' : 'False'}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          {isEditing ? (
            <>
              <IconButton onClick={handleSaveClick}>
                <SaveIcon />
              </IconButton>
              <IconButton onClick={handleCancelClick}>
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleEditClick}>
              <ModeEditIcon />
            </IconButton>
          )}
          <IconButton onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default ToDoCard;
