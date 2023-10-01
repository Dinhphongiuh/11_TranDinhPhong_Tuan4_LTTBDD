import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff']}
      style={styles.container}
    >
      <View style={styles.ProductContainer}>
        <View style={styles.UsbContainer}>
          <Image
            source={require('./assets/usb.png')}
            style={styles.UsbImage}
          >
          </Image>
          <Text style={styles.textUsb}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
      </View>

      <View style={styles.danhGiaContainer}>
          <Text style={styles.textDanhGia}>Cực kỳ hài lòng</Text>
          <View style={styles.containerStar}>
            <TouchableOpacity>
              <Icon
                name='star'
                style={styles.starIcon}
              ></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name='star'
                style={styles.starIcon}
              ></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name='star'
                style={styles.starIcon}
              ></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name='star'
                style={styles.starIcon}
              ></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name='star'
                style={styles.starIcon}
              ></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.addImagebtn}>
          <Icon
            style={styles.cameraIcon}
            name='camera'
          ></Icon>
          <Text style={styles.textBtnAdd}>Thêm hình ảnh</Text>
        </TouchableOpacity>

        <View style={styles.cmtContainer}>
          <TextInput
            style={styles.cmtArea}
            placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
            multiline={true}
            blurOnSubmit={true}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.textSubmitBtn}>Gửi</Text>
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
  ProductContainer:{
    paddingTop: '10%',
    width: '80%',
    flexDirection: 'row',
  },
  UsbContainer:{
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  UsbImage:{
    width: 70,
    height: 70,
  },
  textUsb:{
    fontWeight: '600',
    fontSize: 16,
    padding: 10,
  },
  danhGiaContainer:
  {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStar: {
    flexDirection: 'row',
  },
  starIcon:{
    fontSize: 35,
    padding: 8,
    color: '#F2DD1B',
  },
  textDanhGia:{
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
  },
  addImagebtn:{
    borderWidth: 1,
    borderColor: '#1511EB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 68,
  },
  textBtnAdd:{
    fontSize: 25,
    fontWeight: '700',
  },
  cameraIcon:{
    fontSize: 25,
    padding: 12,
  },
  cmtContainer:{
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: '80%',
    height: 222,
  },
  cmtArea:{
    padding: 15,
    // color: '#C4C4C4',
    fontSize: 18,
  },
  submitBtn: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1511EB',
    height: 41,
    borderRadius: 5,
    backgroundColor: '#0D5DB6',
  },
  textSubmitBtn:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    
  }
});
