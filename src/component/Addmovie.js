import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const [title,settitle]=React.useState("")
const [description,setdescription]=React.useState("")
const [image,setimage]=React.useState("")
const [rating,setrating]=React.useState(0)
const [video,setvideo]=React.useState("")



const add=()=>{
var object={title,description,image,rating,video}

localStorage.setItem("movie",JSON.stringify(object))

}
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            movie title
          </Typography>
          <TextField id="outlined-basic" label="title" variant="outlined" onChange={(e)=>settitle(e.target.value)}/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            movie description
          </Typography>
          <TextField id="outlined-basic" label="description" variant="outlined" onChange={(e)=>setdescription(e.target.value)} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            movie image
          </Typography>
          <TextField id="outlined-basic" label="image" variant="outlined" onChange={(e)=>setimage(e.target.value)} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            movie rating
          </Typography>
          <TextField id="outlined-basic" label="rating" variant="outlined" onChange={(e)=>setrating(e.target.value)} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            movie video
          </Typography>
          <TextField id="outlined-basic" label="video" variant="outlined" onChange={(e)=>setvideo(e.target.value)}/>
          <Box>
          <Button onClick={add} variant="contained" color="success">
            Success
          </Button>
        </Box>
        </Box>
      
      </Modal>
    </div>
  );
}
