import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';

export default function App() {
  // LowerCase
  const [isChecked, setIsCheckedLowerCase] = useState(true);
  const toogleCheckBoxLowerCase = () => {
    setIsCheckedLowerCase(!isChecked);
  };
  // upcase
  const [isChecked1, setIsCheckedupcase] = useState(false);
  const toogleCheckBoxupcase = () => {
    setIsCheckedupcase(!isChecked1);
  };
  // number
  const [isChecked2, setIsCheckedNumber] = useState(true);
  const toogleCheckBoxNumber = () => {
    setIsCheckedNumber(!isChecked2);
  };
  // Sysmbol
  const [isChecked3, setIsCheckedSysmbol] = useState(false);
  const toogleCheckBoxSysmbol = () => {
    setIsCheckedSysmbol(!isChecked3);
  };

  return (
    <LinearGradient
      colors={['#9e9ec6', '#5f5fa8','#a0a0c6']}
      style={styles.container}
    >
      <View style={styles.containerForm}>
        <Text style={styles.titleForm}>PASSWORD{'\n'}GENERATOR</Text>
        <TextInput
          style={styles.textinput}
        >
        </TextInput>
        
        <View style={styles.validateContainer}>
          <View style={styles.labelForm}>
            <Text style={styles.textLabel}>Password length</Text>
            <TextInput
              style={styles.passLengthInput}
            ></TextInput>
          </View>

          <View style={styles.labelForm}>
            <Text style={styles.textLabel}>Include lower case letters</Text>
            <TouchableOpacity
              style={[styles.checkBox, isChecked ? styles.checkedBox : styles.uncheckBox,]}
              onPress={toogleCheckBoxLowerCase}
            >
              {isChecked && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.labelForm}>
            <Text style={styles.textLabel}>Include upcase letters</Text>
            <TouchableOpacity
              style={[styles.checkBox, isChecked1 ? styles.checkedBox : styles.uncheckBox,]}
              onPress={toogleCheckBoxupcase}
            >
              {isChecked1 && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.labelForm}>
            <Text style={styles.textLabel}>Include number</Text>
            <TouchableOpacity
              style={[styles.checkBox, isChecked2 ? styles.checkedBox : styles.uncheckBox,]}
              onPress={toogleCheckBoxNumber}
            >
              {isChecked2 && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.labelForm}>
            <Text style={styles.textLabel}>Include special symbol</Text>
            <TouchableOpacity
              style={[styles.checkBox, isChecked3 ? styles.checkedBox : styles.uncheckBox,]}
              onPress={toogleCheckBoxSysmbol}
            >
              {isChecked3 && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.GenerateBtn}>
          <Text style={styles.GenerateBtnText}>GENERATE PASSWORD </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerForm:
  {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#23235B',
    borderRadius: 15,
  },
  titleForm:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },
  textinput:{
    backgroundColor: '#151537',
    width: '90%',
    height: 55,
  },
  validateContainer:{
    // flex: 2,
    width: '90%',
    // justifyContent: 'space-between',
    marginTop: 30,
  },
  labelForm:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textLabel:{
    color: '#fff',
    fontWeight: '600',
    paddingRight: 20,
    fontSize: 18,
  },
  passLengthInput:{
    width: 60,
    height: 20,
    backgroundColor: '#fff',
  },
  checkBox:{
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  GenerateBtn:{
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#3B3B98',
    margin: 30,
  },
  GenerateBtnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});
