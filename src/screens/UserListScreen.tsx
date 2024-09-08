import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../components/UserCard';
import { Loader } from '../components/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../constants/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Container';
import { AppState, AppDispatch } from '../store/store';
import { User } from '../constants/types/userTypes';
import { fetchUsersRequest } from '../store/actions/userActions';
import { HeaderComponent } from '../components/HeaderComponet';
import EmptyComponent from '../components/EmptyComponent';

type UserListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserList'>;

const UserListScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation<UserListScreenNavigationProp>();
    const { users, loading, hasMore, initialLoader } = useSelector((state: AppState) => state.userState);

    useEffect(() => {
        dispatch(fetchUsersRequest(0)); 
    }, [dispatch]);

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            dispatch(fetchUsersRequest(users.length));
        }
    };

    const onCardClick = (userId: number) => {
        navigation.navigate('PostsList', { userId });
    };

    const renderItem = ({ item }: { item: User }) => (
        <UserCard
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            phone={item.phone}
            company={item.company.name}
            address={`${item.address.street}, ${item.address.city}, ${item.address.postalCode}`}
            image={item.image}
            onCardClick={() => onCardClick(item.id)}
        />
    );

    if (initialLoader) {
        return <Loader />;
    }

    const renderEmptyComponent = () => <EmptyComponent title='No Users' />;

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent title={"Users"} showBackButton={false} />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color={AppColors.themeColor} /> : null}
                ListEmptyComponent={renderEmptyComponent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.pageBackgroundColor,
    },
});

export default UserListScreen;
