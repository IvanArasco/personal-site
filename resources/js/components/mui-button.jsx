import * as React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton({ title }) {
  return <Button variant="contained">{title}</Button>;
}