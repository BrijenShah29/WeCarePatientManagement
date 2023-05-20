import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Logo from '../../../assets/images/UserImage.png'
import {useNavigation} from '@react-navigation/native';


const AddPatient = () => {
  const { height } = useWindowDimensions();
  const [patient1, setPatient1] = useState('');
  const [patientId, setPatient1Id] = useState('');
  const [patientDOB, setPatient1DOB] = useState('');

  const navigation = useNavigation();

  const onSavePatientPressed = () => {
    console.warn('Add Patient Pressed');
    navigation.navigate('PatientList');
  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
    navigation.navigate('UserProfile');
  };

  const onMorePressed = () => {

  };
  const onlogoutPressed = () => {
    console.warn('logout Pressed');
    navigation.navigate('SignIn');
  };

  const resetFormPressed = () => {
    console.warn('resetForm Pressed');
  };

  const onBackButtonPressed = () => {
    navigation.navigate('PatientList');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Add Patient Records </Text> 
        <Text>{''}</Text>

         <Image source={Logo} 
           styles={styles.logo, {height: height * 0.01}} 
           resizeMode="contain" />


{/* Patient 1 Details   */}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Name:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
             editable={true}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Time:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
             editable={true}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'DOB:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
            keyboardType='numberpad'
             editable={true}/>
          </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Age:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
            keyboardType='numberpad'
             editable={true}/>
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Sugar:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
            keyboardType='numberpad'
             editable={true}/>
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '40%'}]}
            onChangeText={setPatient1}
            value={'Blood Pressure:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'60%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
            keyboardType='numberpad'
             editable={true}/>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Oxygen:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
            keyboardType='numberpad'
             editable={true}/>
          </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '25%'}]}
            onChangeText={setPatient1}
            value={'Condition:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'75%'}]}
            onChangeText={setPatient1DOB}
            value={setPatient1}
             editable={true}/>
          </View>

        <CustomButton text="More" fgColor="#4765A9"onPress={onMorePressed} type="FORTH" />

         <Text>{''}</Text> 
         <Text>{''}</Text>
         
        <CustomButton text="Save Patient" 
        onPress={onSavePatientPressed}
           />

        <CustomButton
          text="Reset Form"
          onPress={resetFormPressed}
          bgColor="#FFFFFF"
          fgColor="#4765A9"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomButton text="Back" onPress={onBackButtonPressed} type="TERTIARY" />
          <CustomButton text="Logout" onPress={onlogoutPressed} type="TERTIARY" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '20%',
    maxWidth: 50,
    maxheight: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    alignContent: 'right',
    marginVertical: 10,
    fontSize: 12,
    alignItems: 'left',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    width: '25%',
  },
  textRecord: {
    alignItems: 'left',
    color: '#051c60',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 14,
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  link: {
    color: '#fd8375',
  },
});
export default AddPatient;
