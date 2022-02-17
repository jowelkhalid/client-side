import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Fluoride helps prevent tooth decay by making the tooth more resistant to acid attacks from plaque bacteria and sugars in the mouth. It also reverses early decay.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Dental fillings are used to treat cavities because a dentist tends to want to remove the decayed part (the cavity) and fill it to stop any further damage from occurring.",
    img: cavity,
  },
  {
    name: "Teeth whitening",
    description:
      "Tooth whitening is any process that lightens the color of a tooth. Whitening may be accomplished by physical removal of the stain or a chemical reaction to lighten the tooth color.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
