import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LoginPage(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}></View>
            <View style={styles.loginContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#fff',
    },
      imageContainer: {
          flexDirection: 'column',
          flex: 1,
          backgroundColor: '#0059d4',
        },
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    }
    });