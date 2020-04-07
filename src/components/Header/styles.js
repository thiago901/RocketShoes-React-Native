import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
  align-items: center;
`;

export const LogContainer = styled.TouchableOpacity`
  align-items: center;
`;
