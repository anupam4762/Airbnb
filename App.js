/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   StatusBar
 } from 'react-native';

 import HomeScreen from './src/screens/Home';
 import Post from './src/components/Post';
 import feed from './assets/data/feeds'
 import SearchResultsScreen from './src/screens/SearchResults';
 import DestinationSearchScreen from './src/screens/DestinationSearch';
 import GuestsScreen from './src/screens/Guests';
 
 const post1 = feed[0];
 const post2 = feed[1];
 const post3 = feed[2]
 
 const App: () => React$Node = () => {
   return (
     <>
     <StatusBar barStyle="dark-content"/>
     
       {/* <HomeScreen/> */}
       {/* <Post post={post1}/>
       <Post post={post2}/>
       <Post post={post3}/> */}
       {/* <SearchResultsScreen/> */}
       {/* <DestinationSearchScreen/> */}
       <GuestsScreen/>
     
     </>
   );
 };
 
   
 
 export default App;
 