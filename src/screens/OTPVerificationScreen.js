import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleContinue = async () => {
    if (otp.every(digit => digit !== '')) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      navigation.navigate('SignUp');
    }
  };

  const handleResendOTP = () => {
    alert ('resend otp function goes here from serverside')
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          We have sent a verification code to
        </Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              ref={(input) => { inputRefs.current[index] = input; }}
            />
          ))}
        </View>
        <Text style={styles.instructions}>
          Check the text message for your OTP
        </Text>
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.resendLink}>Didn't get the OTP? Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.continueButton, otp.every(digit => digit !== '') && styles.continueButtonActive]}
          onPress={handleContinue}
          disabled={!otp.every(digit => digit !== '') || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.continueButtonText}>Continue</Text>
          )}
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
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  phoneNumber: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 20,
    color: '#000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FF424E',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color:"black",
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
  },
  resendLink: {
    color: '#FF424E',
    textDecorationLine: 'underline',
    marginBottom: 20,
    fontFamily: 'Inter-Regular',
  },
  continueButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonActive: {
    backgroundColor: '#FF424E',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});

export default OTPVerificationScreen;