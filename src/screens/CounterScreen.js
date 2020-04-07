import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_count':
      return {...state, counter: action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'change_count', payload: state.counter + 1});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'change_count', payload: state.counter - 1});
        }}
      />
      <Text>Current Count: {state.counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

// import {Button, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {
//           setCounter(counter + 1);
//         }}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//       />
//       <Text>Current Count: {counter} </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default CounterScreen;
