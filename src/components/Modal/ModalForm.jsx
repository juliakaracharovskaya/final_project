import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper, Stack } from "@mui/material";
// import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { updatePostQuery } from "../../redux/actions/postsAC";
import { useDispatch, useSelector } from "react-redux";

function ModalForm({ title, image, text, _id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newText, setNewText] = useState(text);

  const dispatch = useDispatch();

  const person = useSelector((store) => store.person);

  const createSubmit = () => {
    const preparedPostQuery = {
      newTitle,
      newImage,
      newText,
    };
    // console.log({ preparedPostQuery });
    const body = JSON.stringify(preparedPostQuery);

    dispatch(updatePostQuery(body, person.token, _id));

    setNewTitle(newTitle);
    setNewImage(newImage);
    setNewText(newText);
  };

  return (
    <Stack component="div" direction="column" alignItems="center">
      <Paper elevation={3} sx={{ width: 392 }}>
        <Stack
          component="form"
          alignItems="center"
          spacing={2}
          noValidate
          sx={{ py: 5, px: 2 }}
          autoComplete="off"
        >
          <Typography component={"div"}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Typography>
          <Typography component={"div"}>
            <TextField
              id="filled-basic"
              label="Text"
              variant="outlined"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </Typography>
          <Typography component={"div"}>
            <TextField
              id="standard-basic"
              label="Image"
              variant="outlined"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </Typography>

          <Button onClick={createSubmit} variant="outlined">
            Save Post
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default ModalForm;
