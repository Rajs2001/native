import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleContinue = async () => {
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      navigation.navigate('OTPVerification', { phoneNumber: '+91 ' + phoneNumber });
    }
  };

  const privacyclick = ()=>{
    alert('Privacy button click function');
  }
  const TnCBTNclick = ()=>{
    alert('TnC button click function');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>ZIPPER</Text>
        <Text style={styles.title}>Log in or Sign Up</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>
        <TouchableOpacity
          style={[styles.continueButton, phoneNumber.length === 10 && styles.continueButtonActive]}
          onPress={handleContinue}
          disabled={phoneNumber.length !== 10 || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.continueButtonText}>Continue</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you agree to our
        </Text>
        <View style={styles.linkContainer}>
          <TouchableOpacity  onPress={privacyclick}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.linkSeparator}> </Text>
          <TouchableOpacity onPress={TnCBTNclick}>
            <Text style={styles.link} >Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  backButton: {
    padding: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Inter-Regular',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#FF424E',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#FF424E',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF424E',
    borderRadius: 8,
    marginBottom: 20,
    height: 50,
  },
  countryCode: {
    paddingLeft: 15,
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color:"black"
  },
  continueButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonActive: {
    backgroundColor: '#FF424E',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  termsText: {
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: '#000',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  linkSeparator: {
    color: '#000',
  },
});

export default LoginScreen;