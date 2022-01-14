import React, { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = React.createRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.clientWidth);
    }
  }, [elementRef]);

  return { width, elementRef };
}

export default useSizeElement;   