import { Calendar } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function CalendarScreen({onDateSelect}) {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const date = `${year}-${month}-${day}`;

  const [selected, setSelection] = useState(date);
  const [markedDates, setMarkedDates] = useState({});

  const dayNow = (day) => {
    setSelection(day.dateString);
  };

  useEffect(() => {
    // 임의의 일정 데이터
    const eventData = {
      '2023-07-15': { marked: true, dotColor: 'skyblue' },
      '2023-07-20': { marked: true, dotColor: 'skyblue' },
      '2023-07-25': { marked: true, dotColor: 'skyblue' },
    };

    setMarkedDates(eventData);
  }, []);

  return (
    <>
      <Calendar
        style={styles.calendar}
        onDayPress={dayNow}
        markedDates={{
          ...markedDates,
          [selected]: { selected: true, selectedColor: 'skyblue' },
        }}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.selectedContainer}>{selected}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  calendar: {
    width: 410,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  selectedContainer: {
    marginTop: 10,
    marginRight: 280,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalendarScreen;