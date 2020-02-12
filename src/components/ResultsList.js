import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultDetail from './ResultsDetail'
import ResultShowScreen from '../screens/ResultShowScreen';

const ResultList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() =>
                            {
                                navigation.navigate("ResultShow", {id: item.id})
                            }}>
                            <ResultDetail 
                                navigation={navigation}
                                result={item}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(ResultList);