import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {

//for Email
const  [email, setEmail] = useState('');
const  [emailError, setEmailError] = useState('');

//For password
const  [password,setPassword] = useState('');
const  [passwordError,setPasswordError] = useState('');

const  [message, setMessage] = useState('');

const signIn = async()=>{
  if(email!="" && password!=""){
    await fetch('',{          //Dynamic link should be here
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })

    }).then(res => res.json())
    .then(resData => {
      setMessage(resData.message)
    })
  }
  if(email!=""){
    alert(email);
    setEmailError('');
  }else{
    setEmailError('Hey ! email should not be empty..');
  }

  if(password!=""){
    alert(password);
    setPasswordError('');
  }else{
    setPasswordError('Your password should not be empty..');
  }
}

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 0}}>
          <Text style={{fontWeight: 'bold', fontSize: 75, color: COLORS.secondary}}>
            O
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 75, color: COLORS.dark}}>
            MOB
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 75, color: COLORS.pink}}>
            I
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 75, color: COLORS.dark}}>
            /
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 75, color: COLORS.pink}}>
            O
          </Text>
        </View>

        <View style={{marginTop: 0}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Hi,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
              placeholder="Email" 
              style={STYLES.input}
              value={email}
              onChangeText={(anything) => setEmail(anything)}
               />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} onPress={signIn}>
              Sign In 
            </Text>
          </View>
          <View
            style={{
              marginVertical: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
