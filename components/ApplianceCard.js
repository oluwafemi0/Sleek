import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ApplianceCard = ({ appliance, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{margin:2, padding: 5, borderWidth: 1,borderColor:'#b19cd9', borderRadius: 5 }}>
        <Text style={{  color: '#b19cd9',textAlign: 'center' }}>{appliance.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ApplianceCard;
