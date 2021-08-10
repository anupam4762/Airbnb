import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from '../navigation/ExploreNavigator'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15434'
        }}>
            {/* Explore/Home Tab */}
            <Tab.Screen 
                name={"Explore"}
                component={ExploreNavigator}
                options=
                    {{tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color}/>
                    ),
                    headerShown: false
                }}
            />

            {/* Saved/Whishlist */}
            <Tab.Screen 
                name={"Saved"}
                component={Home}
                options=
                    {{tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color}/>
                    )
                }}
            />

            {/* Airbnb */}
            <Tab.Screen 
                name={"Airbnb"}
                component={Home}
                options=
                    {{tabBarIcon: ({color}) => (
                        <FontAwesome5 name="airbnb" size={25} color={color}/>
                    )
                }}
            />

            {/* Messages Tab */}
            <Tab.Screen 
                name={"Messages"}
                component={Home}
                options=
                    {{tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color}/>
                    )
                }}
            />

            {/* Profile tab */}
            <Tab.Screen 
                name={"Profile"}
                component={Home}
                options=
                    {{tabBarIcon: ({color}) => (
                        <EvilIcons name="user" size={25} color={color}/>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default HomeTabNavigator;