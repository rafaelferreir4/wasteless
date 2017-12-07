import React from 'react';
import TextField from 'material-ui/TextField';

const Search = () => (
  <div>
    <TextField
      floatingLabelText="Search"
      hintText="Full width"
      fullWidth={true}
    />
  </div>
);

export default Search;
