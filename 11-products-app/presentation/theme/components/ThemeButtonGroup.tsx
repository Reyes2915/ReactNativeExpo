import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    options:string[];
    selectedOptions:string[];

    onSelect: (option:string)=>void;
}

const ThemeButtonGroup = ({onSelect,options,selectedOptions}:Props) => {
  const primaryColor=useThemeColor({},'primary');
  
    return (
    <View>
      {
        options.map((option)=>(
            <TouchableOpacity
            key={option}
            onPress={()=>onSelect(option)}
            style={[
                styles.button,
                selectedOptions.includes(option) && {
                    backgroundColor:primaryColor
                }
            ]}
            >
                <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={[
                    styles.buttonText,
                    selectedOptions.includes(option) && styles.selectedButtonText
                ]}
                >{option[0].toUpperCase()+option.slice(1)}</Text>
            </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default ThemeButtonGroup


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    button:{
        padding:10,
        margin:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    buttonText:{
        fontSize:16
    },
    selectedButtonText:{
        color:'#fff'
    }
})