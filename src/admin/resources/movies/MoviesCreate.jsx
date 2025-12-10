import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const MovieCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="movie_id" />
      <TextInput source="title_vi" />
      <TextInput source="title_en" />
      <TextInput source="poster_url" />
      <TextInput multiline source="synopsis" />
      <NumberInput source="duration_mins" />
      <TextInput source="director" />
    </SimpleForm>
  </Create>
);

export default MovieCreate;
