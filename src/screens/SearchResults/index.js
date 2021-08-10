import React from "react";
import { Text, View, FlatList } from "react-native";
import Post from '../../components/Post';
import feeds from "../../../assets/data/feeds";

const SearchResultsScreen = (props) => {

  return (
    <View>
      <FlatList
        data={feeds}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
      <Text>SearchResults Screen</Text>
    </View>
  );
};

export default SearchResultsScreen;