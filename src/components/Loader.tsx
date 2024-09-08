import React from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native";
import { AppColors } from "../constants/colors/colors";

export const Loader: React.FC = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={AppColors.themeColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})