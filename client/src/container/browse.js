import React, { useState, useEffect, useContext, useRef } from 'react';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import SliderContainer from './slider';
import DetailedModalContainer from './detailed_modal';
import { searchMovies } from '../redux/actions/contentAction';
import { useSelector, useDispatch } from 'react-redux';
import SearchMovies from './searchMovies';
export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [showDetailedFilmModal, setShowDetailedFilmModal] = useState(false);
  const { auth, search } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return(
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}

      {showDetailedFilmModal ? 
        <DetailedModalContainer setShowDetailedFilmModal={setShowDetailedFilmModal}/>
        : null
      }
      <Header src="little" dontShowOnSmallViewPort video={!searchTerm}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src='/images/users/1.png' />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src='/images/users/1.png' />
                  <Header.TextLink></Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        {!searchTerm ?
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
          : null
        }

      </Header>
      {
        searchTerm ? 
        <SearchMovies searchTerm={searchTerm} setShowDetailedFilmModal={setShowDetailedFilmModal}/>
        :
        (<Card.Group>
          {slideRows.map((slideItem) => (
            <SliderContainer 
              category={category} 
              slideItem={slideItem}
              key={`${category}-${slideItem.title.toLowerCase()}`}
              setShowDetailedFilmModal={setShowDetailedFilmModal}
            />
          ))}
        </Card.Group>)
      }
      <FooterContainer />
    </>
)}
