import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.titleText}>Car Detailing</Text>
        <Text style={styles.bodyText}>We detail your vehicle anytime in the year from the comfort of your home!</Text>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupScreenButton}
          onPress={() => navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    // marginTop: 500,
    flex: 2,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: '#0059d4',
  },
  buttonContainer: {
    paddingTop:0,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#006bff',
  },
  loginScreenButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#006bff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  signupScreenButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#006bff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  signupText:{
    color:'white',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  titleText:{
    marginLeft:40,
    marginTop:30,
    fontSize:30,
    fontWeight: 'bold',
    color: 'white'
  },
  bodyText: {
    marginLeft: 40,
    marginTop:10,
    marginRight: 40,
    color: 'white'
  }
});
