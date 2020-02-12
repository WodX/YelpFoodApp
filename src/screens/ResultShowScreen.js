import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        try{
            const response = await yelp.get(`/${id}`);
             setResult(response.data);
        }catch{
            console.log("RIP")
        }
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }
    
    return (
        <>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{uri: item}} />
                      
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultShowScreen;