"use client";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import getAnimal from "../app/getAnimal";
import React, { useEffect, useState, useRef, useCallback } from "react";

// สมมติว่านี่คือข้อมูลสัตว์ที่คุณต้องการแสดง
const animals = [
  {
    id: 1,
    name: "สัตว์ A",
    image: "/vercel.svg",
    description: "คำอธิบายสัตว์ Aadasdadasdasdsasdsaddasdqsdasdasdasddadsaasadasdasdasdadasd",
  },
  {
    id: 2,
    name: "สัตว์ B",
    image: "/path/to/image2.jpg",
    description: "คำอธิบายสัตว์ B",
  },
  {
    id: 3,
    name: "สัตว์ C",
    image: "/path/to/image3.jpg",
    description: "คำอธิบายสัตว์ B",
  },

  // เพิ่มข้อมูลสัตว์เพิ่มเติมที่นี่...
];



export default function Home() {
  const [data, setData] = useState([...animals]); // สมมติว่าเริ่มต้นด้วยข้อมูลบางส่วน
  const [loading, setLoading] = useState(false);
  const observer = useRef();


  const lastAnimalElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // โหลดข้อมูลเพิ่มเติมที่นี่
          setLoading(true);
          // ตัวอย่าง: setData(prevData => [...prevData, ...newData]);
          setLoading(false);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  return (
    <Grid container spacing={4}>
      {data.map((animal, index) => (
        <Grid
          item
          xs={6} // เพิ่มจำนวน column ในแถวขนาดเล็ก
          sm={3} // เพิ่มจำนวน column ในแถวขนาดกลาง
          md={3} // เพิ่มจำนวน column ในแถวขนาดใหญ่
          key={animal.id}
          ref={data.length === index + 1 ? lastAnimalElementRef : null}
        >
          <Card style={{ height: "100%" }}>
            {" "}
            {/* ปรับให้ Card มีความสูงเต็ม */}
            <CardMedia
              component="img"
              image={animal.image}
              alt={animal.name}
              style={{ height: 0, paddingTop: "56.25%" }} // กำหนดให้สัดส่วนของรูปภาพเป็น 16:9 แต่อาจต้องปรับแต่งเพิ่มเติม
              onError={(e) => (e.target.src = "path/to/placeholder.png")} // ตั้งค่ารูปภาพ placeholder เมื่อไม่พบรูปภาพ
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {animal.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
