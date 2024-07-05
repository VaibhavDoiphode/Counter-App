import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementCount, decrementCount} from './counterAction';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerCintainer}>
        <Text style={styles.text}>Redux Counter App</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.button}>
          <Button title="Add" onPress={() => dispatch(incrementCount())} />
        </View>

        <View style={styles.innerCintainer}>
          <Text style={styles.text}>Count:{counter}</Text>
        </View>
        <View style={styles.button}>
          <Button title="Remove" onPress={() => dispatch(decrementCount())} />
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  innerCintainer: {
    margin: 10,
  },
  text: {
    fontSize: 30,
    borderColor: 'red',
    borderBottomWidth: 2,
  },
  button: {
    height: 40,
    width: 200,
    margin: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    shadowColor: 'black',
    elevation: 2,
    borderRadius: 5,
  },
});
