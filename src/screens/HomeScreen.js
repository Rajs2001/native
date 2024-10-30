import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const navigation = useNavigation();

  const handleMealSelection = meal => {
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
              <Icon name="menu" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="menu" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="menu" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 150,
            marginHorizontal: '32%',
            backgroundColor: 'red',
            height: 150,
            borderRadius: 100,
          }}>
          <Text
            style={{
              color: 'white',
              marginTop: 55,
              marginLeft:18,
              fontFamily:'Inter-Bold',
              fontSize:25,
            }}>
            ZIPPER
          </Text>
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
            {['Breakfast', 'Lunch', 'Dinner'].map(meal => (
              <TouchableOpacity
                key={meal}
                style={[
                  styles.mealButton,
                  selectedMeal === meal && styles.selectedMealButton,
                ]}
                onPress={() => handleMealSelection(meal)}>
                <Text
                  style={[
                    styles.mealButtonText,
                    selectedMeal === meal && styles.selectedMealButtonText,
                  ]}>
                  {meal}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.noMealContainer}>
            <Icon name="icon" size={60} color="#666" />
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
          <MaterialIcon name="icon" size={24} color="#FF424E" />
          <Text style={[styles.tabText, styles.activeTabText]}>Tiffin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <MaterialIcon name="icon" size={24} color="#666" />
          <Text style={styles.tabText}>Insta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <MaterialIcon name="icon" size={24} color="#666" />
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
  banner: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
