// SystemCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SystemCard = ({ system, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ padding: 10, margin: 5, borderWidth: 1 }}>
        <Text>{system.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SystemCard;
