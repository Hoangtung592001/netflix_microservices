import React, { useEffect } from 'react';
import { BrowseContainer } from '../container/browse';
import { selectionFilter } from '../utils';
import { getContent } from '../redux/actions/contentAction';
import { useSelector, useDispatch } from 'react-redux';
export default function Browse() {
  const dispatch = useDispatch();
  const { content } = useSelector(state => state);
  const { auth } = useSelector(state => state);
  useEffect(() => {
    dispatch(getContent('films', auth.accessToken));
    dispatch(getContent('series', auth.accessToken));
  }, []);
  const slides = selectionFilter({ series: content.series, films: content.films });
  return <BrowseContainer slides={slides}/>;
}
