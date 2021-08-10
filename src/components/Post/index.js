import React from 'react';
import { View, Text, Image} from "react-native"
import styles from './styles.js'

function Post(props) {
    
    const post = props.post;
    return (
        <View style={styles.container}>
        
            {/* Image */}
            <Image
                style={styles.image}
                source={{uri: post.image}}
            />
            
            {/* Bed and bederoom text */}
            <Text style={styles.bedrooms}>{post.bed} Bed {post.bedroom} Bedroom</Text>
            
            {/* Description */}
            <Text style={styles.description} numberOfLines={2}>{post.type}, {post.title}, {post.description}</Text>
            
            {/* prices old and new */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
                 / night           
            </Text>
            
            {/* Total price */}
            <Text style={styles.totalPrice}>${post.totalPrice}</Text>
            
        </View>
    )
}

export default Post
