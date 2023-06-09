import React from "react";
import styled from "styled-components";
import Image from "../../assets/Images/profilelg.png";

const Container = styled.div`
  margin-top: 5rem;
`;

const ProfileImg = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>Scott Grant</ProfileName>
    </Container>
  );
};

export default Profile;
