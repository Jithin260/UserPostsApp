import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors/colors';

interface EmptyProps {
    title: string
}

const EmptyComponent: React.FC<EmptyProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.pageBackgroundColor,
    },
    text: {
        fontSize: 16,
        color: AppColors.primaryTextColor,
        fontWeight: "bold"
    },
});

export default EmptyComponent;
