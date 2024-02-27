import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Button color="inherit">HaSat</Button>
            </Link>
          </Typography>
          <Link href="/" passHref><Button color="inherit">หน้าหลัก</Button></Link>
          <Link href="/report" passHref><Button color="inherit">รายงานสัตว์หาย</Button></Link>
          <Link href="/search" passHref><Button color="inherit">ค้นหา</Button></Link>
          <Link href="/about" passHref><Button color="inherit">เกี่ยวกับเรา</Button></Link>
          {/* เพิ่มปุ่มเข้าสู่ระบบที่นี่ */}
          <Button color="inherit">เข้าสู่ระบบ</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
