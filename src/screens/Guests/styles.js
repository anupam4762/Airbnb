import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },

    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;