import InputBar from "../components/InputBar/InputBar";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { drawerWidth } from "../theme/theme";
import Container from "@mui/material/Container";
import Chat from "../components/Chat/Chat";
import { Typography } from "@mui/material";
import SideBar from "../components/Layout/SideBar";
import CssBaseline from "@mui/material/CssBaseline";

const MainPage = () => {
  const { sessionId } = useParams();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar />

      {sessionId ? (
        <Chat />
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh", // 전체 화면 높이 설정
          }}
        >
          <Box
            px={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // 세로 방향으로 요소를 배치
              borderRadius: "30px",
            }}
            border={2}
          >
            <h1>Welcome To Fing-P ChatBot</h1>
            <Typography variant="b2" pb={6}>
              핑프챗봇은 학교 생활에 대한 여러 정보를 알고 있습니다! 무엇이든
              물어봐주세요.
            </Typography>
          </Box>
        </Container>
      )}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { sm: `${drawerWidth}px` },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          p: 8,
          pb: 2,
        }}
      >
        <InputBar />
      </Box>
    </Box>
  );
};

export default MainPage;
