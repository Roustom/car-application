import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

export default function SignupPage({navigation}){
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true

    });

    const textInputChange = (val) => {
        if( val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    
    const handlePassworChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handleConfirmPassworChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return(
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="#0052c2" barStyle="light-content" />
            <View style={styles.imageContainer}>
                <Text style={styles.signinText}>Register Now!</Text>
            </View>
            <Animatable.View 
                style={styles.loginContainer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 15}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry? true : false}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePassworChange(val)}
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry? 
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20}
                    />
                    : 
                    <Feather
                        name='eye'
                        color='grey'
                        size={20}
                    />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, { marginTop: 15}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.textInput}
                        secureTextEntry={data.confirm_secureTextEntry? true : false}
                        autoCapitalize='none'
                        onChangeText={(val) => handleConfirmPassworChange(val)}
                    />
                    <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry? 
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20}
                    />
                    : 
                    <Feather
                        name='eye'
                        color='grey'
                        size={20}
                    />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                        <LinearGradient
                            colors= {['#056eff', '#0052c2']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Sign Up</Text>
                        </LinearGradient>
                </View>
                <TouchableOpacity
                style={[styles.signIn, {
                    borderColor: '#0052c2',
                    borderWidth: 1,
                    marginTop: 15
                }]}
                onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.textSign, { color:'#0052c2'}]}>Sign In</Text>
                </TouchableOpacity>
            </Animatable.View>
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
        flex: 2.5,
        paddingLeft: 40,
        borderTopStartRadius:60,
        borderTopEndRadius: 60,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    signinText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 190,
        marginLeft: 40
    },
    text_footer: {
        paddingTop: 30,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        color: '#05375a'
    },
    textInput: {
        flex: 0.9,
        paddingLeft: 10,
        color: '#05375a'
    },
    signIn: {
        marginTop:30,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
    });