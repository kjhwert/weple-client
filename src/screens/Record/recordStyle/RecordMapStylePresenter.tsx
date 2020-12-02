import React, {useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import CheckBox from '@react-native-community/checkbox';

interface IProps {
  navigation: any;
}

export default ({navigation, FreeMap, MembershipMap}: IProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <MapStyleTitle>무료</MapStyleTitle>
            <ActivityWrapper>
              {FreeMap.map((item, idx) => (
                <ActivityImageWrapper key={idx}>
                  <ActivityImage onPress={() => {}} source={item.image} />
                  <CheckBox
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: 5,
                    }}
                    boxType={'circle'}
                    disabled={false}
                    value={false}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </ActivityImageWrapper>
              ))}
            </ActivityWrapper>

            <MapStyleTitle>멤버 전용</MapStyleTitle>
            <ActivityWrapper>
              {MembershipMap.map((item, idx) => (
                <ActivityImageWrapper key={idx}>
                  <ActivityImage onPress={() => {}} source={item.image} />
                  <CheckBox
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: 5,
                    }}
                    boxType={'circle'}
                    disabled={false}
                    value={false}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </ActivityImageWrapper>
              ))}
            </ActivityWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const MapStyleTitle = styled.Text`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 0;
  font-size: 15px;
  color: #181818;
  font-weight: bold;
  text-align: left;
`;

const ActivityWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;

const ActivityImageWrapper = styled.TouchableOpacity`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-width: 1px;
  border-color: #c1c1c1;
  width: 32%;
  margin-bottom: 20px;
`;

const ActivityImage = styled.Image`
  width: 100%;
  height: 100px;
  flex-flow: row wrap;
`;
