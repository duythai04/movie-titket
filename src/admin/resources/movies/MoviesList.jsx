import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const MovieList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="movie_id" />
      <TextField source="title_vi" />
      <TextField source="title_en" />
      <TextField source="director" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default MovieList;
