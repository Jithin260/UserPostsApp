import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppColors } from '../constants/colors/colors';

interface PostCardProps {
    title: string;
    body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
    return (
        <View style={styles.postCard}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postBody}>{body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    postCard: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginHorizontal: 16
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: AppColors.primaryTextColor,
    },
    postBody: {
        fontSize: 14,
        color: AppColors.primaryTextColor,
    },
});

export default PostCard;
