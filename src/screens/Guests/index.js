import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles.js'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={{ justifyContent: 'space-between', height: '100%'}}>

            <View>
                 {/* Row 1: Adults */}
                <View style={ styles.row}>

                {/* Titles */}
                <View>
                    <Text style={{fontWeight:'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                </View>

                {/* Buttons and value */}
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>

                    {/* - */}
                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}
                    >
                        <Text  style={{fontSize: 22, color: '#5d5d5d'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>

                    {/* + */}
                    <Pressable onPress={() =>  setAdults(adults + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: '#5d5d5d'}}>+</Text>
                    </Pressable>

                </View>
                </View>
                {/* Row 1 end */}

                {/* Row 2: Childrens */}
                <View style={ styles.row}>

                {/* Titles */}
                <View>
                    <Text style={{fontWeight:'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Age 2-12</Text>
                </View>

                {/* Buttons and value */}
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>

                    {/* - */}
                    <Pressable onPress={() => setChildrens(Math.max(0, childrens - 1))}
                        style={styles.button}
                    >
                        <Text  style={{fontSize: 22, color: '#5d5d5d'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 18}}>{childrens}</Text>

                    {/* + */}
                    <Pressable onPress={() =>  setChildrens(childrens + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: '#5d5d5d'}}>+</Text>
                    </Pressable>

                </View>
                </View>
                {/* Row 2 end  */}

                {/* Row 3: Adults */}
                <View style={ styles.row}>

                {/* Titles */}
                <View>
                    <Text style={{fontWeight:'bold'}}>Infants</Text>
                    <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                </View>

                {/* Buttons and value */}
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>

                    {/* - */}
                    <Pressable onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button}
                    >
                        <Text  style={{fontSize: 22, color: '#5d5d5d'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>

                    {/* + */}
                    <Pressable onPress={() =>  setInfants(infants + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 22, color: '#5d5d5d'}}>+</Text>
                    </Pressable>

                </View>
                </View>
                {/* row 3 end */}
            </View>
           
            <Pressable 
                onPress={() => 
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params :{
                            screen: 'SearchResults',
                        },
                    }) 
                }
                style={{
                    marginBottom: 20, 
                    backgroundColor: '#f15454', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: 50, 
                    marginHorizontal: 30, 
                    borderRadius: 10
                  }}>
                   <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                       Proceed
                    </Text>
            </Pressable>
        </View>
    )
}

export default GuestsScreen;
