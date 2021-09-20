import React from "react";
import { Container, Text, Input, Btn, Break } from "./styles/opt";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Btn = function OptFormBtn({ children, ...restProps }) {
  return (
    <Btn {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Btn>
  );
};
