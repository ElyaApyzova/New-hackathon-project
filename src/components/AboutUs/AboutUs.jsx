import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" component="div" marginTop={4}>
        О нас
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" marginTop={4}>
            Питомник «Семейный сад» – современный питомник хвойных и лиственных растений, образованный в 1996 году. «Семейный сад» – это большое, правильно организованное хозяйство и просто чудесная ландшафтная зона.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" marginTop={2}>
            Год за годом питомник набирает новые мощности. В настоящее время хозяйство расположено на 50 га земельных угодий. Из них 2,0 га занимают производственные орошаемые площади под контейнерное выращивание саженцев и 35 га занимают растения в грунте. Питомник растений оснащен современной технической базой.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" marginTop={2}>
            Мы предлагаем растения в контейнерах от Р-9 по С-200. Способ выращивания растений в горшках даёт возможность продавать их круглый год, невзирая на капризы погоды. Субстрат и необходимый запас органических веществ позволяют длительное время содержать саженцы в контейнерах без пересадки.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" marginTop={2}>
            Мы также гарантируем успешную приживаемость растений, так как при пересадке их корневая система нисколько не повреждается.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" marginTop={2}>
            Коллекция питомника составляет более 300 наименований вечнозеленых растений, лиственных деревьев и кустарников.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              marginTop: '24px',
              marginBottom: '24px',
              cursor: "pointer",
              backgroundColor: "#A0D206",
              color: "#FFFFFF",
              p: "10px 40px",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#00821E" },
            }}
          >
            Подробнее
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;