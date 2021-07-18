import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const RecordScreen = ({navigation}) => {
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
            Welcome,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Save your record here
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            {/* <Icon
              name="confirmation_number"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            /> */}
            <TextInput placeholder="Roll Number" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            {/* <Icon
            
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            /> */}
            <TextInput placeholder="Student Name" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            {/* <Icon
              name="textbox-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            /> */}
            <TextInput  placeholder="Course" style={STYLES.input}/>
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Save Record
            </Text>
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
            Feel free to ,
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecordScreen;