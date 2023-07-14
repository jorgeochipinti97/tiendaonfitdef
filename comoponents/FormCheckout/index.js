import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";


export const FromCheckout = ({ product, quantity }) => {
  return (
    <>

      <form
      // onSubmit={handleSubmit(onSubmitAddress)}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Nombre" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Apellido" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="DNI" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="filled"
              fullWidth

              // onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Direccion" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Codigo postal" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Ciudad" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Celular" variant="filled" fullWidth />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button
            type="submit"
            color="secondary"
            className="circular-btn"
            size="large"
          >
            Enviar
          </Button>
        </Box>
      </form>
    </>
  );
};
