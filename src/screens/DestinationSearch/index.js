import React, { useState } from 'react';
import styles from './styles.js';
import  { Text, View, TextInput, FlatList, Pressable } from "react-native";
import searchResults from '../../../assets/data/search.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = (props) => {
    
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
    
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
                    <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={25} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
            />
            
        </View>
    )
}

export default DestinationSearchScreen;
