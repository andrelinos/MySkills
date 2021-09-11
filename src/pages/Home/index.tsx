import React, { useEffect, useState } from 'react';

import {
    Alert,
    View,
    Text,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import { styles } from './styles';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
        };

        if (!data.name) {
            Alert.alert(
                'Hey There!',
                'Please enter a new skill.',
                [
                    {
                        text: 'Ok',
                    },
                ],
                {
                    cancelable: true,
                },
            );
        } else {
            setMySkills((oldSkills) => [...oldSkills, data]);
            setNewSkill('');
        }
    }

    function handleRemoveSkill(id: string, name: string) {
        Alert.alert(
            'Hey There!',
            `Want to remove "${name}" from your list?`,
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        setMySkills((oldSkills) =>
                            oldSkills.filter((skill) => skill.id !== id),
                        );
                    },
                },
                {
                    text: 'No',
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
            },
        );
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

            <Button title="Add" onPress={handleAddNewSkill} />

            <View style={styles.mySkillsTitle}>
                <Text style={styles.title}>My Skills</Text>
                <Text style={styles.mySkillsCount}>({mySkills.length})</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={(item) => item.id}
                style={styles.mySkillsList}
                renderItem={({ item }) => (
                    <View style={styles.skillCardButtons}>
                        <SkillCard skill={item.name} />
                        <TouchableOpacity
                            style={styles.buttonRemoveSkill}
                            onPress={() =>
                                handleRemoveSkill(item.id, item.name)
                            }>
                            <Text style={styles.removeSkill}>-</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
