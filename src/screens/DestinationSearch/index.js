import React, { useState } from 'react';
import styles from './styles.js';
import  { Text, View, TextInput, FlatList } from "react-native";
import searchResults from '../../../assets/data/search.js';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = (props) => {
    
    const [inputText, setInputText] = useState('');
    
    return (
        <View style={styles.container}>
        
            {/* Input Component */}
            <TextInput 
                style={styles.textInput}
                placeholder="Enter the desired place"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* List of destinations */}
            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={25} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            
        </View>
    )
}

export default DestinationSearchScreen;
