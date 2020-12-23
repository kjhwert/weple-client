import React, {createContext, ReactNode, useCallback, useState} from 'react';
import styled from 'styled-components/native';

const AlertContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const AlertContextProvider = ({children}: IProps) => {
  const [visible, setVisible] = useState(false);
  const [component, setComponent] = useState<ReactNode>(null);

  const setAlertVisible = (component: ReactNode) => {
    setComponent(component);
    setVisible(true);
  };

  const setAlertInvisible = () => {
    setVisible(false);
  };

  return (
    <AlertContext.Provider value={{setAlertVisible, setAlertInvisible}}>
      {children}
      {visible && (
        <Container>
          <Wrapper>{component}</Wrapper>
        </Container>
      )}
    </AlertContext.Provider>
  );
};

export default AlertContext;

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  z-index: 30;
  width: 240px;
  height: 260px;
  background-color: #fff;
`;
