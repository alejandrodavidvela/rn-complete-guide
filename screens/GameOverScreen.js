import React from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
    <ScrollView>
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image 
        
        style={styles.image} 
        source={require('../assets/success.jpg')}
        // source={{uri: 'https://miro.medium.com/max/2400/0*2OlgFOLdERlGJ0ec.png'}}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 40
  },
  image:{
    width: '100%',
    height: '100%'
  },
  imageContainer:{
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  highlight:{
    color: Colors.primary,
    fontFamily: 'roboto-bold'
  },
  resultContainer:{
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText:{
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
