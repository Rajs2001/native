import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const navigation = useNavigation();

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.citySelector}>
            <Text style={styles.cityText}>City</Text>
            <Text style={styles.selectedCity}>Gurugram ▼</Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={require('../assets/bag-icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={require('../assets/video-icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={require('../assets/wallet-icon.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.banner}>
          <Image source={require('../assets/launch-banner.png')} style={styles.bannerImage} />
        </View>
        <View style={styles.content}>
          <View style={styles.dateSelector}>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.dateText}>Saturday</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateButtonText}>→</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mealSelector}>
            {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
              <TouchableOpacity
                key={meal}
                style={[styles.mealButton, selectedMeal === meal && styles.selectedMealButton]}
                onPress={() => handleMealSelection(meal)}
              >
                <Text style={[styles.mealButtonText, selectedMeal === meal && styles.selectedMealButtonText]}>
                  {meal}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.noMealContainer}>
            <Image source={require('../assets/sad-face-icon.png')} style={styles.sadFaceIcon} />
            <Text style={styles.noMealText}>No meal found</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require('../assets/tiffin-icon.png')} style={styles.tabIcon} />
          <Text style={[styles.tabText, styles.activeTabText]}>Tiffin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require('../assets/insta-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Insta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require('../assets/more-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  citySelector: {
    flexDirection: 'column',
  },
  cityText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  selectedCity: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  banner: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButton: {
    padding: 10,
  },
  dateButtonText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Inter-Regular',
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#000',
  },
  mealSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mealButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedMealButton: {
    borderBottomColor: '#FF424E',
  },
  mealButtonText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  selectedMealButtonText: {
    color: '#FF424E',
    fontFamily: 'Inter-SemiBold',
  },
  noMealContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sadFaceIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  noMealText: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  footer: {
    padding: 15,
  },
  subscribeButton: {
    backgroundColor: '#FF424E',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  tabText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  activeTabText: {
    color: '#FF424E',
    fontFamily: 'Inter-SemiBold',
  },
});

export default HomeScreen;