import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortDropdown = ({ onSortClick }) => {
  const [sortKey, setSortKey] = React.useState('');

  const handleChange = (event) => {
    setSortKey(event.target.value);
    onSortClick(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        maxWidth: '100px',
        my: 3,
      }}
    >
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        id="sort-by-select"
        value={sortKey}
        onChange={handleChange}
        label="Sort By"
      >
        <MenuItem value="time">Time</MenuItem>
        <MenuItem value="score">Score</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="karma">Karma</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
