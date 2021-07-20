import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {

//for Name
const  [name, setName] = useState('');
const  [nameError, setNameError] = useState('');
  //for Email
const  [email, setEmail] = useState('');
const  [emailError, setEmailError] = useState('');

//For password
const  [password,setPassword] = useState('');
const  [passwordError,setPasswordError] = useState('');

const  [message, setMessage] = useState('');

const signUp = async()=>{
  if(email!="" && password!="" && name!=""){
    await fetch('',{          //Dynamic link should be here
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })

    }).then(res => res.json())
    .then(resData => {
      setMessage(resData.message)
    })
  }
  if(name!=""){
    alert(name);
    setNameError('');
  }else{
    setNameError('Hey ! Name should not be empty..');
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
            Hello,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign up to continue
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
                placeholder="Name" 
                style={STYLES.input} 
                value={name}
                onChangeText={(name) => setName(name)}
                />
          </View>
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
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} onPress={signUp}>
              Sign Up
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
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
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
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in 
            </Text>
          </TouchableOpacity>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
             or
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Record')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Record
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;