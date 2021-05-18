import React from 'react';
import {Text} from 'react-native';

interface Props {
  title: string;
}

export default ({title}: Props) => {
  return (
    <Text
      style={{
        position: 'absolute',
        left: 10,
        bottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -0.5, height: 0.5},
        textShadowRadius: 10,
        color: 'white',
      }}>
      {title}
    </Text>
  );
};
