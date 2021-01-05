import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  termsList: any;
}

export default ({navigation, termsList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {termsList.map((item, idx) => (
              <SetUpWrapper key={idx}>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('termsDetaile', {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    });
                  }}>
                  <SetUpListText>{item.title}</SetUpListText>
                  <MoreImage source={require('../../../../../assets/set_more.png')} />
                </SetBtn>
              </SetUpWrapper>
            ))}
          </Card>
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

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SetUpWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;

// const SetBtnWrapper = styled.View`
//   display: flex;
//   width: 100%;
//   padding: 20px;
//   border-bottom-width: 1px;
//   border-color: #eeeeee;
// `;

const SetBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const SetUpListText = styled.Text`
  font-size: 13px;
  text-align: left;
  color: #7f7f7f;
  width: 85%;
`;

const MoreImage = styled.Image`
  width: 13px;
  height: 13px;
`;
