import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Container';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyComponent from '../components/EmptyComponent';
import { HeaderComponent } from '../components/HeaderComponet';
import axios from 'axios';
import { Loader } from '../components/Loader';
import PostCard from '../components/PostCard';
import { AppColors } from '../constants/colors/colors';
import { Post } from '../constants/types/postsTypes';
import { AppDispatch, AppState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearInitialLoading, clearPosts, fetchPostsRequest } from '../store/actions/postAction';

type PostsListScreenRouteProp = RouteProp<RootStackParamList, 'PostsList'>;


interface PostsListScreenProps extends StackScreenProps<RootStackParamList, 'PostsList'> { }

const PostsListScreen: React.FC<PostsListScreenProps> = ({ route }) => {
    const dispatch: AppDispatch = useDispatch();
    const { userId } = route.params;
    const { posts, loading, hasMore, initialLoader } = useSelector((state: AppState) => state.postState);


    useEffect(() => {
        dispatch(fetchPostsRequest(userId, 0));
        return () => {
            dispatch(clearPosts())
            dispatch(clearInitialLoading())
        }
    }, [dispatch]);


    const handleLoadMore = () => {
        if (!loading && hasMore) {
            dispatch(fetchPostsRequest(userId, posts.length));
        }
    };

    const renderItem = ({ item }: { item: Post }) => (
        <PostCard
            title={item?.title}
            body={item?.body}
        />
    );


    const renderEmptyComponent = () => <EmptyComponent title='No Posts' />;


    if (initialLoader) {
        return <Loader />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent title={"Posts"} showBackButton={true} />
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.toString()} 
                ListEmptyComponent={renderEmptyComponent}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color={AppColors.themeColor} /> : null}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.pageBackgroundColor,
    },
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
        color: '#333',
    },
    postBody: {
        fontSize: 14,
        color: '#666',
    },
});

export default PostsListScreen;
