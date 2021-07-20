import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const RecordScreen = ({navigation}) => {

//for Roll number
const  [rollNo, setRollNo] = useState('');
const  [rollNoError, setRollNoError] = useState('');
  //for Student Name
const  [studentName, setStudentName] = useState('');
const  [studentNameError, setStudentNameError] = useState('');

//For Course
const  [course,setcourse] = useState('');
const  [courseError,setCourseError] = useState('');

const  [message, setMessage] = useState('');

const Record = async()=>{
  if(rollNo!="" && studentName!="" && coursee!=""){
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
  if(rollNo!=""){
    alert(rollNo);
    setRollNoError('');
  }else{
    setRollNoError('Hey ! rollNo should not be empty..');
  }
  if(studentName!=""){
    alert(studentName);
    setStudentNameError('');
  }else{
    setStudentNameError('Hey ! studentName should not be empty..');
  }

    if(course!=""){
    alert(coucourserse);
    setCourseError('');
  }else{
    setCourseError('Your course should not be empty..');
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
            <TextInput 
              placeholder="Roll Number"
              style={STYLES.input} 
              value={rollNo}
              onChangeText={(rollNo) => setRollNo(rollNo)}
              />
          </View>
          <View style={STYLES.inputContainer}>
            {/* <Icon
            
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            /> */}
            <TextInput 
              placeholder="Student Name" 
              style={STYLES.input} 
              value={studentName}
              onChangeText={(studentName) => setStudentName(studentName)}
              />
          </View>
          <View style={STYLES.inputContainer}>
            {/* <Icon
              name="textbox-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            /> */}
            <TextInput  
              placeholder="Course" 
              style={STYLES.input}
              value={course}
              onChangeText={(course) => setcourse(course)}
              />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} onPress={Record}>
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