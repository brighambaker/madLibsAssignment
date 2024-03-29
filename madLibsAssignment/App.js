import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
    const [name, setName] = useState('');
    const [noun, setNoun] = useState('');
    const [event, setEvent] = useState('');
    const [story, setStory] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // 1 for input, 2 for story

    const today = new Date().toLocaleDateString();

    const createStory = () => {
        const newStory = `${name} is too cool for ${noun} class. Instead, they will be attending the ${event}.`;
        setStory(newStory);
        setCurrentPage(2);
    };

    const clearInputs = () => {
        setName('');
        setNoun('');
        setEvent('');
    };

    return (
        <View style={styles.container}>
            {currentPage === 1 && (
                <View style={styles.inputContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Assignment 1</Text>
                    </View>
                    <View style={styles.instructionsContainer}>
                        <Text style={styles.instructions}>How to play Mad Libs: Fill in the blanks, following the hints that are given.</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Noun"
                            value={noun}
                            onChangeText={setNoun}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="An Event"
                            value={event}
                            onChangeText={setEvent}
                        />
                        <Button title="Make my hall pass" onPress={createStory} />
                        <Button title="Clear" onPress={clearInputs} />
                    </View>
                </View>
            )}
            {currentPage === 2 && (
                <View style={styles.storyScreen}>
                    
                    <View style={styles.hallPassContainer}>
                        <Text style={styles.verticalText}>HALL PASS</Text>
                    </View>
                    <View style={styles.storyContainer}>
                        <Text style={styles.header}>MAD LIBS</Text>
                        <Text style={styles.date}>Date: {today}</Text>
                        <Text style={styles.story}>
                            <Text style={styles.underlineText}>{name}</Text>
                            <Text style={styles.story}> is too cool for </Text>
                            <Text style={styles.underlineText}>{noun}</Text>
                            <Text style={styles.story}> class. Instead, they will be attending the </Text>
                            <Text style={styles.underlineText}>{event}</Text>
                            <Text style={styles.story}>.</Text>
                        </Text>
                        <View style={styles.signatureSection}>
                            <View style={styles.signatureBox}>
                                <Text style={styles.signatureLabel}>Signed:</Text>
                            </View>
                        </View>
                        <Button title="Back" onPress={() => setCurrentPage(1)} />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer: {
        width: '100%',
        flex: 1,
    },
    titleContainer: {
        flex: 0.3,
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 45,
    },
    instructionsContainer: {
        flex: 0.8
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 35,
        color: 'magenta',
        textDecorationLine: 'underline',
    },
    instructions: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 45,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
    },
    header: {
        fontSize: 50,
        color: 'lightblue',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginVertical: 10,
        marginBottom: 45,
    },
    date: {
        fontSize: 18,
        marginBottom: 35,
    },
    story: {
        fontSize: 24,
        marginBottom: 40,
        lineHeight: 50,
    },
    underlineText: {
        fontSize: 24,
        color: 'red',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'red',
    },
    storyScreen: {
        flex: 1,
        flexDirection: 'row',
    },
    hallPassContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5, 
    },
    storyContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 5,
    },
    verticalText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
        left: 0,
        top: 0,
        width: 450,       
        textAlign: 'center',
        transform: [
            { rotate: '270deg' }, 
            { translateX: -150 }, 
            { translateY: 5 }  
        ],
    }, 
    signatureBox: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20, 
        padding: 5, 
        width: 280, 
        height: 90, 
        justifyContent: 'topLeft', 
    },
    signatureLabel: {
        fontSize: 20,
    },
});

export default App;
