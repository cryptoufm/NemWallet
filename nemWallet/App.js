import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';

export default class App extends React.Component {
    state = {
      fontLoaded: false,
    };
  // constructor() {

    async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({ fontLoaded: true });
    } 
  // }

  render() {
    return (
      this.state.fontLoaded ? (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Nem Wallet</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Welcome...
          </Text>
        </Content>
        <Footer>
          <Text>2018, CryptoUFM</Text>            
        </Footer>
      </Container> ) : null 
    );
  }
}