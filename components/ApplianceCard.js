// ApplianceCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ApplianceCard = ({ appliance, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ padding: 10, margin: 5, borderWidth: 1 }}>
        <Text>{appliance.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ApplianceCard;
