import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024 HaSat. สงวนลิขสิทธิ์.
        </Typography>
      </Container>
    </Box>
  );
}