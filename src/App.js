import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import Card from './components/Card'

function App(){
    return(
        <SafeAreaView style={styles.container}>
            <Card title="Micheal Scott" text="That's what she said!"></Card>
            <Card title="Harvey Dent" text="Either die a hero or live long enough to see yourself become a villain..."></Card>
            <Card title="Freddie Mercury" text="Mama! I dont' wanna die sometimes I wish never born at all..."></Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
});

export default App;