import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import { StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [text, setText] = useState("")
  return (
    <View style = {styles.background}>
      <SearchBar text = {text}
       onTextChange = {(newText)=> setText(newText)}
       onTextSubmit = {() => console.log("text submitted")} />
      <Text className = "text-red-500 bg-green-500">{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  }
})

export default SearchScreen;