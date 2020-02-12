import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price == '€' || '€€' || '€€€'
        return results.filter(result => {
            return result.price === price;
        });

    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
                />
            {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultsByPrice('€')} title={"Cost Effective"} />
                <ResultList results={filterResultsByPrice('€€')} title={"Bit Pricer"} />
                <ResultList results={filterResultsByPrice('€€€')} title={"Big Spender"} />
            </ScrollView>
        </>  
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
