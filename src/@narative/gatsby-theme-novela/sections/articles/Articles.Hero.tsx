import React, { useContext } from 'react';
import styled from "@emotion/styled";

import Image from "@components/Image";

import mediaqueries from "@styles/media";
import { IAuthor } from "@types";
import Icons from '@icons';
import SocialLinks from "@components/SocialLinks";
import { GridLayoutContext } from './Articles.List.Context';
interface AuthorHeroProps {
  author: IAuthor;
}

const AuthorHero: React.FC<AuthorHeroProps> = ({ authors }) => {
  const author = authors[0];
    const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );

  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';


  return (
    <Hero>
      <HeroImage>
        <RoundedImage src={author.avatar.large} />
      </HeroImage>
      <Heading>{author.name}</Heading>
      <Subheading>{author.bio}</Subheading>
      <Social>
        <SocialLinks links={author.social} />
      </Social>
    </Hero>
  );
};

export default AuthorHero;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 110px;
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${p => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  ${mediaqueries.tablet`
    width: 146px;
    height: 146px;
  `}

  ${mediaqueries.phablet`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
  `}
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const Heading = styled.h1`
  font-size: 38px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;

  ${mediaqueries.tablet`
  `}

  ${mediaqueries.phablet`
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;
  ${mediaqueries.tablet`
    display: none;
  `};
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
    background: ${p => p.theme.colors.hover};
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }
  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;
    path {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;