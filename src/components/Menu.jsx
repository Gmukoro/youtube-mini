import React from "react";
import styled from "styled-components";
import GonaTube from "../img/gonatube-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import FeedIcon from "@mui/icons-material/Feed";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 35px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={GonaTube} />
          GonaTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>

        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsSoccerIcon />
          Sports
        </Item>
        <Item>
          <Gam />
          Gaming
        </Item>
        <Item>
          <HomeIcon />
          Movies
        </Item>
        <Item>
          <HomeIcon />
          News
        </Item>
        <Item>
          <HomeIcon />
          Live
        </Item>
        <Item>
          <HomeIcon />
          Settings
        </Item>
        <Item>
          <HomeIcon />
          Report
        </Item>
        <Item>
          <HomeIcon />
          Help
        </Item>
        <Item>
          <HomeIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};
export default Menu;
