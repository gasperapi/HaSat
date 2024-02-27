"use client";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import getAnimal from "../app/getAnimal";
import React, { useEffect, useState, useRef, useCallback } from "react";

async function getAnimals() {
  const response = await fetch(
    "https://65dc41c1e7edadead7eb6f69.mockapi.io/api/v1/DogCat"
  );
  if (!response.ok) {
    throw new Error("cannot fetch Animals");
  }
  return response.json();
}

export default function Home() {
  const [animalState, setAnimalState] = useState([]); // ตั้งค่าเริ่มต้นของ state ให้เป็น array ว่าง
  const [loading, setLoading] = useState(false);

  const initAnimal = async () => {
    setLoading(true);
    try {
      const result = await getAnimals();
      setAnimalState(result); // อัพเดท state ด้วยข้อมูลจาก API
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initAnimal();
  }, []);

  return (
    <Grid container spacing={4}>
  {animalState.map((animal, index) => (
    <Grid item xs={12} sm={4} md={3} key={animal.id}> {/* ปรับขนาด Grid เพื่อลดความกว้าง */}
      <Card>
        <CardMedia
          component="img"
          image={animal.avatar || "path/to/placeholder.png"}
          alt={animal.name}
          style={{ height: 280 }} 
        />
        <CardContent style={{ minHeight: "200px" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {animal.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {animal.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
  {loading && <p>Loading...</p>}
</Grid>
  );
}
