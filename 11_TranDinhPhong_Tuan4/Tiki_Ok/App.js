import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.col}>
          <Image
            source={require('./assets/book.png')}
            style={styles.productImage}
          ></Image>
          <TouchableOpacity>
            <Text style={[styles.Text1]}>Mã giảm giá đã lưu</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.col, styles.col1]}>
          <Text style={[styles.Text1]}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.Text1}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.textGia}>141.800 đ</Text>
          <Text style={styles.textGiaGiam}>141.800 đ</Text>
          <View style={styles.slContainer}>
            <View style={styles.slControl}>
              <TouchableOpacity style={[styles.btnSL, styles.btnDiss]}>
                <Text style={[styles.textBtnSL, styles.textBtnSLDiss]}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textSL}>1</Text>
              <TouchableOpacity style={styles.btnSL}>
                <Text style={styles.textBtnSL}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.textMs}><Text style={styles.textMs}>Mua sau</Text></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity><Text style={styles.textXTD}>Xem tại đây</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.giamGiaContainer}>
        <View style={styles.containerInputMGG}>
          <View style={styles.coupontIcon}></View>
          <TextInput
            placeholder='Mã giảm giá'
          ></TextInput>
        </View>

        <TouchableOpacity 
          style={styles.btnADMGG}
        >
          <Text style={styles.textADMGG}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerPhieuQT}>
        <Text style={styles.Text1}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity>
          <Text style={styles.textXTD}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TamTinhContainer}>
        <Text style={styles.textTamTinh}>Tạm tính</Text>
        <Text style={styles.textTongGia}>141.800 đ</Text>
      </View>

      <View style={styles.containerThanhToan}>
        <View style={styles.containerTT1}>
          <Text style={styles.textTT}>Thành tiền</Text>
          <Text style={styles.textTongGia}>141.800 đ</Text>
        </View>
        <TouchableOpacity
          style={styles.BtnDatHang}
        >
          <Text style={styles.textDathang}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  productContainer:{
    width: '90%',
    flexDirection: 'row',
  },
  col:{
    // height: 190,
    justifyContent: 'space-between',
  },
  col1:{
    width: '70%',
  },
  productImage:{
    width: 104,
    height: 127,
  },
  Text1:{
    // paddingTop: 10,
    fontWeight: 14,
    fontWeight: '700',
    // paddingBottom: 10,
  },
  textGia:{
    color: '#EE0D0D',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textGiaGiam:{
    color: '#808080',
    textDecorationLine: 'line-through',
    fontSize: 12,
    fontWeight: '700',
  },
  slContainer:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  slControl:{
    flexDirection: 'row',
  },
  btnSL:{
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 16,
  },
  textBtnSL:{
    fontWeight: 'bold',
  },
  textBtnSLDiss:{
    color: '#808080',
  },
  textSL:{
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
  },
  textMs:{
    color: '#134FEC',
    fontSize: 12,
    fontWeight: '700',
  },
  textXTD:{
    color: '#134FEC',
    fontSize: 12,
  },
  giamGiaContainer:{
    flexDirection: 'row',
    width: '80%',
  },
  containerInputMGG:{
    width: 208,
    height: 45,
    borderWidth: 1,
    borderColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  coupontIcon:{
    backgroundColor: '#F2DD1B',
    width: 32,
    height: 16,
    marginRight: 10,
    marginLeft: 20,
  },
  btnADMGG:{
    width: 99,
    height: 45,
    backgroundColor: '#0A5EB7',
    marginLeft: 20,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textADMGG:{
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  containerPhieuQT:{
    width: '80%',
    flexDirection: 'row',
  },
  TamTinhContainer:{
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  textTamTinh:{
    fontSize: 18, 
    fontWeight: '700',
  },
  textTongGia: {
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: '700',
  }, 
  containerThanhToan:{
    width: '80%',
  },
  containerTT1:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTT:{
    fontSize: 18,
    color: '#808080',
    fontWeight: '700',
  },
  BtnDatHang:{
    width: '100%',
    backgroundColor: '#E53935',
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDathang:{
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  }
});
