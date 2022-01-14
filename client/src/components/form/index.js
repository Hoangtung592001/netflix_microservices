import React, { useContext, createContext, useState } from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit, Placeholder, InputField } from './styles/form';

export const PlaceholderContext = createContext();

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = React.forwardRef((props, ref) => {
  const { placeholderTran, setPlaceholderTran } = useContext(PlaceholderContext);
  const { children, ...restProps } = props;
  return ( 
    <Input
      ref={ref}
      {...restProps}
      onFocus={() => setPlaceholderTran(true)}
      onBlur={({target}) => {
        if (!target.value) {
          setPlaceholderTran(false);
        }
      }}
    >
        {children}
    </Input>
  )
});

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Placeholder = function FormPlaceholder({ children, ...restProps }) {
  const { placeholderTran, setPlaceholderTran } = useContext(PlaceholderContext);
  return <Placeholder placeholderTran = {placeholderTran} {...restProps}>{children}</Placeholder>;
};

Form.InputField = function FormInputField({ children, ...restProps }) {
  const [placeholderTran, setPlaceholderTran] = useState(false);
  return (
    <PlaceholderContext.Provider value={{ placeholderTran, setPlaceholderTran }}>
      <InputField {...restProps}>{children}</InputField>;
    </PlaceholderContext.Provider>
  ) 
};
