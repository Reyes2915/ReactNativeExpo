import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

  const navigation=useNavigation();

  const onHeaderLeftClick=(canGoBack:boolean)=>{

    if(canGoBack){
      navigation.dispatch(StackActions.pop());
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  return <Stack
  screenOptions={{
    headerShown:false,
    headerShadowVisible:false,
    contentStyle:{
        backgroundColor:'white',
    },
    headerLeft:({tintColor,canGoBack})=><Ionicons
    name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
    
    className='mr-5' size={20}
    onPress={()=>onHeaderLeftClick(canGoBack)}
    ></Ionicons>
  }}
  >

    <Stack.Screen name='home/index'

    options={{
        title:'Productos'
    }}
    
    >

    </Stack.Screen>
    <Stack.Screen name='profile/index'

    options={{
        title:'Perfil'
    }}
    
    >

    </Stack.Screen>
    <Stack.Screen name='Settings/index'

    options={{
        title:'Ajustes'
    }}
    
    >

    </Stack.Screen>
  </Stack>
}

export default StackLayout