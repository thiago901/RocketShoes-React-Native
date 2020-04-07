import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Content = styled.View`
  background: #fff;
  margin: 0 auto;
  margin: 10px;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
`;
export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
export const Info = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;
export const AmountContainer = styled.View`
  background: #eee;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Product = styled.View``;
export const Image = styled.Image`
  background: #eee;
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

export const Decription = styled.View`
  flex: 1;
`;
export const DecriptionText = styled.Text`
  font-size: 16px;
  line-height: 19px;
`;
export const Value = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background: #fff;
  padding: 5px;
  width: 60px;
  text-align: center;
  font-size: 18px;
  color: #000;
  margin: 0 5px;
`;

export const InputContainer = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
`;

export const SubTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
export const TotalText = styled.Text`
  margin-top: 30px;
  text-align: center;
  color: #ccc;
`;
export const ButtonFinish = styled(RectButton)`
  margin-top: 30px;
  background: #7159c1;
  border-radius: 4px;
  padding: 15px;
`;
export const ButtonFinishText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonTouch = styled.TouchableOpacity``;

export const ContentEmpty = styled.View`
  background: #fff;
  margin: 20px;
  border-radius: 4px;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
