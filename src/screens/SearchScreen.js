import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import { StyleSheet } from 'react-native';
import yelp from './api/yelp';

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        text: text,
        location: "san jose"
      }
    });
    setResults(response.data.businesses)
    console.log(response.data.businesses)
  }
  return (
    <View style = {styles.background}>
      <SearchBar text = {text}
       onTextChange = {setText}
       onTextSubmit = {() => searchApi()} />
      <Text className = "text-red-500 bg-green-500">{results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  }
})

export default SearchScreen;