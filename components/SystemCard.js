import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SystemCard = ({ system, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ padding: 5, borderWidth: 1,borderColor:'#b19cd9', borderRadius: 5}}>
        <Text style={{  color: '#b19cd9',textAlign: 'center' }}>{system.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SystemCard;
