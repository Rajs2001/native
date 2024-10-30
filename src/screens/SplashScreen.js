import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function SplashScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(1)).current;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace('LoginScreen');
        });
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.circle}>
          <Text style={styles.text}>ZIPPER</Text>
        </View>
      </Animated.View>
    );
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    circle: {
      width: '60%',
      aspectRatio: 1,
      borderRadius: 1000, // Ensures it's a perfect circle
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
    },
  });