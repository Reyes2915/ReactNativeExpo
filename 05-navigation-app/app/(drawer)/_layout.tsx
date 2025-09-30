import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
     return (
        <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
            headerShown:false,
            overlayColor:'rgba(0,0,0,0,4)',
            drawerActiveTintColor:'indigo',
            headerShadowVisible:false,
            sceneStyle:{
                backgroundColor:'white'
            }
        }}
        >
            <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown:false,
          drawerLabel: 'Tabs+stack',
          title: 'Tabs+stack',
          drawerIcon: ({color,size})=>(
            <Ionicons name='albums-outline'
            color={color} size={size}
            ></Ionicons>
          )
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({color,size})=>(
            <Ionicons name='person-circle-outline'
            color={color} size={size}
            ></Ionicons>
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({color,size})=>(
            <Ionicons name='calendar-outline'
            color={color} size={size}
            ></Ionicons>
          )
        }}
      />
    </Drawer>
     )
}

export default DrawerLayout