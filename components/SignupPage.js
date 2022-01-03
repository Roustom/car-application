import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SignupPage({navigation}){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Text style={styles.signupText}>Register Now!</Text>
            </View>
            <View style={styles.loginContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#0059d4',
    },
      imageContainer: {
          flexDirection: 'column',
          flex: 1,
          backgroundColor: '#0059d4',
        },
    loginContainer: {
        flex: 1,
        borderTopStartRadius:60,
        borderTopEndRadius: 60,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    signupText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 370,
        marginLeft: 40
    }
    });