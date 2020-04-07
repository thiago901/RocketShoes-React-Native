import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  margin: 0 auto;
`;

export const Product = styled.View`
  background: #fff;
  width: 300px;

  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
`;
export const Title = styled.Text``;
export const Image = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;
export const Value = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
export const Info = styled.View`
  flex-direction: row;
  background: ${darken(0.03, '#7159c1')};
  padding: 10px;
  border-radius: 4px;
`;
export const Amount = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const BuyProduct = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const BuyProductText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
`;
export const Loading = styled.View``;
