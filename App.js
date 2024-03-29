import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";

// import LoginScreen  from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
import { Restaurant, OrderDelivery, Basket, ViewCart } from './screens'
import Tabs from './navigation/tabs'
import { store } from './app/store';

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
        <Provider store={store}>
             <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'LoginScreen'}
              >   
                  {/* <Stack.Screen name="LandingPage" component={LandingPage} /> */}
                  {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
                  <Stack.Screen name="HomeTabs" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="Basket" component={Basket} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                  <Stack.Screen name="ViewCart"
                      options={{
                        presentation: "modal",
                        headerShown: false,
                      }}
                    component={ViewCart} />
              </Stack.Navigator>
          </NavigationContainer>
        </Provider>
         
      )
    
}

export default App;