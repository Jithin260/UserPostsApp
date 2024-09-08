import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppColors } from '../constants/colors/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

interface UserCardProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  image: string;
  onCardClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, email, phone, company, address, image, onCardClick }) => {
  return (
    <TouchableOpacity onPress={onCardClick} style={styles.card}>
      <Image
        style={styles.avatar}
        source={{ uri: image }}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{firstName} {lastName}</Text>
        </View>

        <View style={styles.detailView}>
          <MaterialCommunityIcons name="email" size={17} color="red" />
          <Text style={styles.detail}>{email}</Text>
        </View>

        <View style={styles.detailView}>
          <FontAwesome name="phone" size={17} color="brown" />
          <Text style={styles.detail}>{phone}</Text>
        </View>

        <View style={styles.detailView}>
          <MaterialCommunityIcons name="office-building-outline" size={17} color="black" />
          <Text style={styles.detail}>{company}</Text>
        </View>
        <View style={styles.detailView}>
          <FontAwesome name="home" size={17} color="blue" />
          <Text style={styles.detail}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: AppColors.whiteColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.primaryTextColor,
  },
  detail: {
    fontSize: 14,
    color: AppColors.primaryTextColor,
    marginVertical: 2,
    marginLeft: 5
  },
  detailView: {
    flexDirection: "row",
    alignItems: 'center'
  }
});

export default UserCard;
