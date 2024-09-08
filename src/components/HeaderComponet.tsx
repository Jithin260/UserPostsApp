import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../constants/colors/colors';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    showBackButton: boolean,
    title: string
}

export const HeaderComponent: React.FC<HeaderProps> = ({ showBackButton, title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={!showBackButton && { height: 0 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>{title}</Text>
            <Ionicons style={{ height: 0 }} name="home" size={24} color="blue" />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: AppColors.themeColor,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        color: AppColors.whiteColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        padding: 8,
    },
});
