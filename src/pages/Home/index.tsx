import React, { useEffect, useState } from 'react';

import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import { styles } from './styles';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills((oldSkills) => [...oldSkills, newSkill]);
        setNewSkill('');
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour <= 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good night');
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Andrelino</Text>
            <Text style={styles.greeting}>{greeting}</Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                clearButtonMode="always"
                value={newSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <View style={styles.mySkillsTitle}>
                <Text style={styles.title}>My Skills</Text>
                <Text style={styles.mySkillsCount}> ({mySkills.length})</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={(item) => item}
                style={styles.mySkillsList}
                renderItem={({ item }) => <SkillCard skill={item} />}
            />
        </SafeAreaView>
    );
}
