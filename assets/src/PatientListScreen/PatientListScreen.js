import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const PatientListScreen = () => {
  const [users,setUsers] = useState([]);
  const { height } = useWindowDimensions();
  const [patient1, setPatient1] = useState('');
  const [patientId, setPatient1Id] = useState('');
  const [patientDOB, setPatient1DOB] = useState('');
  const [patient2, setPatient2] = useState('');
  const [patient3, setPatient3] = useState('');
  const [patient4, setPatient4] = useState('');
  const [patient5, setPatient5] = useState('');
  const [patient6, setPatient6] = useState('');
  const [patient7, setPatient7] = useState('');
  const [patient8, setPatient8] = useState('');
  const [patient9, setPatient9] = useState('');
  const [patient10, setPatient10] = useState('');

  const navigation = useNavigation();

  useEffect(()=>{
	fetchData()
},[]);

const fetchData = () => {
	fetch("http://localhost:3000/api/getALL")
	.then(response => response.json())
	.then(jsonResponse => setUsers(jsonResponse))
	.catch(error => console.log(error))
};

const renderUser = ({item}) => {
	return (
	<View style={{margin:10,borderWidth:1,padding:10,borderColor: '#e8e8e8'}}>
		<Text style={{color:"#051c60",fontSize:16,fontWeight:"bold"}}>
	 {item.name} {item.id}
		</Text>
		<Text style={[styles.text]}>Age : {item.age}</Text>
		<Text  style={[styles.text]}>Dob : {item.dob}</Text>
    <Text  style={[styles.text]}>Condition : {item.condition}</Text>
    <Text  style={[styles.text]}>Oxygen : {item.oxygenLevel}</Text>
    <Text  style={[styles.text]}>Sugar : {item.sugar}</Text>
    <Text  style={[styles.text]}>Blood Pressure : {item.bloodPressure}</Text>
	</View>
	)
}

  const onAddPatientPressed = () => {
    console.warn('Add Patient Pressed');
    navigation.navigate('AddPatient');

  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
     navigation.navigate('UserProfile');
  };

  const onPatientProfilePressed = () => {
    console.warn('Patient Profile Pressed');
    navigation.navigate('ViewPatientRecord');
    
  };
  const onlogoutPressed = () => {
    console.warn('logout Pressed');

    navigation.navigate('SignIn');
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Patient List </Text> 
        <Text>{''}</Text>

        	<View style={{flex:1,backgroundColor:"white",justifyContent: 'space-between'}}>
	        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item,index) => index.toString()}
          />
        </View>



        <Text>{''}</Text>

        <CustomButton text="Add Patient" 
        onPress={onAddPatientPressed}/>

        <CustomButton
          text="Edit Profile"
          onPress={userprofilePressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton text="Logout" onPress={onlogoutPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#FFFFFF',
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
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  textRecord: {
    alignItems: 'left',
    color: '#051c60',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 14,
    height: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  link: {
    color: '#fd8375',
  },
});
export default PatientListScreen;
