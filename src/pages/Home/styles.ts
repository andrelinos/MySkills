import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#121016',
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'android' ? 10 : 16,
        marginTop: 30,
        borderRadius: 5,
    },

    mySkillsTitle: {
        flexDirection: 'row',
        paddingVertical: 20,
    },

    greeting: {
        color: '#4cd137',
        fontSize: 18,
        paddingVertical: 4,
        marginLeft: 8,
        textAlign: 'right',
    },

    mySkillsCount: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 4,
        marginLeft: 8,
    },

    mySkillsList: {
        width: '100%',
        height: '100%',
        flex: 1,
    },

    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 16,
        borderRadius: 8,
    },

    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },

    skillCardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1f1e25',
        marginVertical: 8,
        padding: 16,
        borderRadius: 8,
    },

    buttonRemoveSkill: {
        width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    removeSkill: {
        width: 20,
        height: 20,
        backgroundColor: '#ff7979',
        color: '#fff',
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 28,
        fontSize: 32,
        marginLeft: 5,
        padding: 0,
    },
});
