import BoxScreen from './src/screens/BoxScreen';
import ColorScreen from './src/screens/ColorScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextInput from './src/screens/TextInput';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Input: TextInput,
    BoxScreen: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
