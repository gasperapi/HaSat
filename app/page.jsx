"use client";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import getAnimal from "../app/getAnimal";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

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
    <>
      <Box sx={{ my: 4, mx: 2, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          ตามหาสัตว์หาย
        </Typography>
        <Typography variant="subtitle1">
          พื้นที่สำหรับแบ่งปันข้อมูลและตามหาสัตว์เลี้ยงที่หายไป
          ช่วยกันสร้างชุมชนที่ดีเพื่อนำพวกเขากลับบ้าน
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {animalState.map((animal, index) => (
          <Grid item xs={12} sm={4} md={3} key={animal.id}>
            <Tooltip title={animal.description} placement="top">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.5)",
                }}
                transition={{ duration: 0.5 }}
              >
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {animal.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Tooltip>
          </Grid>
        ))}
        {loading && (
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            กำลังโหลด...
          </Typography>
        )}
      </Grid>
    </>
  );
}
