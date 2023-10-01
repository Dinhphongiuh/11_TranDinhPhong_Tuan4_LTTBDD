import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  return (
    <LinearGradient
      colors={['#FBCB00', '#f2c21e','#f2c21e','#eec001', '#c49e00', '#BF9A00']}
      style={styles.container}
    >
    <View style={styles.containerLG}>
      <Text style={styles.textLG}>LOGIN</Text>
    </View>
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <Icon
          name='user'
          size={40}
        >
        </Icon>
        <TextInput
          style={[styles.input, styles.inputNameWidth]}
          placeholder='Name'
          placeholderTextColor={'black'}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name='lock'
          size={40}
        >
        </Icon>
        <TextInput
          style={[styles.input, styles.inputPassWidth]}
          placeholder='Password'
          placeholderTextColor={'black'}
          secureTextEntry={!isPasswordVisible}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={isPasswordVisible ? 'eye':'eye-slash'}
            size={30}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity
      style={styles.logBtn}
    >
      <Text style={styles.logText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.createAccContainer}>
      <Text style={styles.createAccText}>CREATE ACCOUNT</Text>
    </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerLG:{
    width: '80%',
  },
  textLG:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '20%',
  },
  loginContainer:{
    width: '100%',
    alignItems: 'center',
  },
  inputContainer:{
    width: '80%',
    backgroundColor: '#C4C4C44D',
    height: 54,
    justifyContent: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    flexDirection: 'row',
    marginBottom: 20,
  },
  input:{
    paddingLeft: 20,
    fontSize: 20,
    // width: '90%',
    color: 'black',
  },
  inputNameWidth:
  {
    width: '90%',
  },
  inputPassWidth:{
    width: '80%',
  },
  logBtn:{
    backgroundColor: '#060000',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  logText:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  createAccText:{
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
  },
  createAccContainer:{
    marginBottom: '20%',
  }
});
