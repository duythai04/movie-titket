import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const MovieEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="movie_id" />
      <TextInput source="title_vi" />
      <TextInput source="title_en" />
      <TextInput source="poster_url" />
      <TextInput multiline source="synopsis" />
      <NumberInput source="duration_mins" />
      <TextInput source="director" />
    </SimpleForm>
  </Edit>
);

export default MovieEdit;
