import React from "react";
import styled from "styled-components";
import ThumbsupOutlinedIcon from "@mui/icons-material/ThumbsupOutlined";
import ThumbsDownOffAltOutlinedIcon from "@mui/icons-material/ThumbsDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

const Container = styled.dv`
  display: flex;
  gap: 24px;
`;

const Content = styled.dv`
  flex: 5;
`;

const videoWrapper = styled.dv`
  flex: 5;
`;

const Recommendation = styled.dv`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div``;

const Video = () => {
  return (
    <Container>
      <Content>
        <videoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerator; auto-play; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </videoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,879,170 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbsupOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbsDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};
export default Video;
