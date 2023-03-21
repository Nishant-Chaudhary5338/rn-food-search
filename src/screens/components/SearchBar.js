import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({text, onTextChange, onTextSubmit}) => {
  return (
    <View style = {styles.background}>
        <Feather style = {styles.iconStyle} name="search" size={30} color="black" />
        <TextInput 
         style = {styles.inputStyle} 
         placeholder='Search food'
         value = {text}
         onChangeText = {newText => onTextChange(newText)} 
         autoCorrect = {false}
         onEndEditing = {() => onTextSubmit()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgba(192, 191, 191, 0.8)",
        height: 50,
        borderRadius: 5,
        marginHorizontal : 5,
        flexDirection: "row",
        marginTop: 10
    
    },
    inputStyle: {
        
        flex: 1,
        padding : 2
    },
    iconStyle : {
        alignSelf: "center",
        marginHorizontal: 15,
    }
})

export default SearchBar