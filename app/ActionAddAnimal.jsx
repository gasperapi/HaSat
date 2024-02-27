export async function ActionAddAnimal(formData) {
  // สร้าง object จาก formData เพื่อใช้ใน fetch
  const object = {};
  formData.forEach((value, key) => (object[key] = value));
  const jsonData = JSON.stringify(object);

  // ตั้งค่าสำหรับ fetch request
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonData,
  };

  try {
    // ส่งข้อมูลไปยัง API โดยใช้ fetch
    const response = await fetch(
      "https://65dc41c1e7edadead7eb6f69.mockapi.io/api/v1/DogCat",
      requestOptions
    );
    const data = await response.json();

    // ตรวจสอบ response หากมีข้อผิดพลาด
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    console.log(data);
    window.location.reload(true);
  } catch (error) {
    // จัดการกับข้อผิดพลาดที่อาจเกิดขึ้น
    console.error("There was an error!", error);
  }
}
