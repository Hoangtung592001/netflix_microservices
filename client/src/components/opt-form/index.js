import React, { useState, useContext, createContext } from 'react';
import { Container, Input, Break, Button, Text, InputField, Placeholder } from './styles/opt-form';
export const PlaceholderContext = createContext();

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  const { setPlaceholderTran } = useContext(PlaceholderContext);
  return ( 
        <Input 
          {...restProps}
          onFocus={() => setPlaceholderTran(true)}
          onBlur={({target}) => {
            if (!target.value) {
              setPlaceholderTran(false);
            }
          }}
        />
  )
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.InputField = function OptFormInputField({ children, ...restProps }) {
  const [placeholderTran, setPlaceholderTran] = useState(false);
  return (
    <PlaceholderContext.Provider value={{ placeholderTran, setPlaceholderTran }}>
      <InputField {...restProps}>{children}</InputField>;
    </PlaceholderContext.Provider>
  ) 
};

OptForm.Placeholder = function OptFormPlaceholder({ children, ...restProps }) {
  const { placeholderTran, setPlaceholderTran } = useContext(PlaceholderContext);
  return <Placeholder placeholderTran = {placeholderTran} {...restProps}>{children}</Placeholder>;
};
