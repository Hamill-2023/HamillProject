import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import CalendarScreen from './DailyTodoList/CalendarScreen';
import Popup from './DailyTodoList/PopupDay';

function DailyPage({navigation}) {
    const [popupVisible, setPopupVisible] = useState(false);
  
    const handleOpenPopup = () => {
      setPopupVisible(true);
    }
  
    const handleClosePopup = () => {
      setPopupVisible(false);
      // 버튼 클릭 시 팝업창 닫히면서 일정 데이터베이스에 추가하도록 만들기
    }
  
    return(
      <>
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <CalendarScreen/>
        </View>
  
        {/* if) 해당 날짜에 일정 데이터가 없다면 */}
        <Text style={{fontSize: 20, marginLeft:120, marginBottom:5,}}>아직 일정이 없어요!</Text>
        <View style={styles.btnStyle}>
          <Button title="일정 추가하기" color='skyblue'
            onPress={handleOpenPopup} />
          <Popup visible={popupVisible} onClose={handleClosePopup} />
        </View>
  
        {/* else if) 해당 날짜에 일정 데이터가 있다면 */}
        <View>
          <ScrollView>
            
          </ScrollView>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    btnStyle:{
      marginLeft: 100,
      marginBottom: 90,
      width:200,
    }
  })
  
  export default DailyPage;