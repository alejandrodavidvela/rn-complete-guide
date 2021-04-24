import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image 
        
        style={styles.image} 
        source={require('../assets/success.jpg')}
        //source={{uri: 'https://miro.medium.com/max/2400/0*2OlgFOLdERlGJ0ec.png'}}
        resizeMode="cover"
        />
        </View>
        <View style={styles.resultContainer}>
        <Text 
          style={styles.resultText}>
          Your phone needed{' '}
        <Text 
          style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
        </View>
      
      <MainButton onPress={props.onRestart}>GAME OVER</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: '100%'
  },
  imageContainer:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  highlight:{
    color: Colors.primary,
    fontFamily: 'roboto-bold'
  },
  resultContainer:{
    marginHorizontal: 20,
    marginVertical: 15
  },
  resultText:{
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
