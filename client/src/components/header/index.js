import React, { useState, useRef, useEffect } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
  Overlay
} from './styles/header';
//
export default function Header({ bg = false, video = false, children, src = false, ...restProps }) {
  const videoRef = useRef();
  let handlePlay = (entries, observer) => {
    entries.forEach((entry) => {
      if (videoRef.current) {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    });
  };
  let options = {
    rootMargin: "0px",
    threshold: [0.25, 0.75],
  };
  let observer = new IntersectionObserver(handlePlay, options);
  useEffect(() => {
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  }, [videoRef])
  return bg ? (
    <Background
      data-testid="header-bg" 
      {...restProps}
      style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${src ? `/images/misc/${src}.jpg` : '/images/misc/home-bg.jpg'}) top left / cover`}}
    >
      {children}
    </Background>
  ) : (
    video ? (
      <Background {...restProps}>
        <Overlay>
          {
            <video muted allow="autoplay" ref={videoRef} autoPlay src='/videos/little.mp4'/>
          }
        </Overlay>
        {children}
      </Background>
    ) : children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  const [transition, setTransition] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    if (searchTerm) {
      setSearchActive(true);
      setTransition(false);
      inputRef.current.focus();
    }
    else {
      setTransition(false);
      setSearchActive(true);
      inputRef.current.focus();
    }
  }, [searchTerm])
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => {
        setSearchActive((searchActive) => !searchActive);
        setTransition(true);
      }}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        ref={inputRef}
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        transition={transition}
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/1.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
