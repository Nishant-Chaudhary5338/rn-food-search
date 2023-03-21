import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});





const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName : "Search",
  defaultNavigationOptions : {
    title : "Food Search"
  },
  
},
{
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#fff' },
},

);

export default createAppContainer(navigator);