import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet,TouchableOpacity,Text } from 'react-native';

const ApplianceInput = ({ addAppliance, isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [wattage, setWattage] = useState('');

  const handleAddAppliance = () => {
    if (name && wattage) {
      addAppliance(name, parseInt(wattage));
      setName('');
      setWattage('');
      onClose(); 
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.applianceModal}>
        <TextInput
          style={styles.input}
          placeholder="Appliance Name"
          value={name}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Watts"
          value={wattage}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setWattage(text)}
          keyboardType="numeric"
        />

        <View style={{ margin: 20,flexDirection:'row',justifyContent:'space-evenly', }}>
        <TouchableOpacity onPress={handleAddAppliance} style={styles.button}>
          <Text style={{ fontSize: 15, color: 'white' }}>Add Appliance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={[styles.button, ]}>
          <Text style={{ fontSize: 15, color: 'white' }}>Close Modal</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  applianceModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 15,
    width: '80%',
    borderRadius: 5,
    borderColor:'#b19cd9',
    color: '#b19cd9'
  },
  button: {
    backgroundColor: '#b19cd9',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
});

export default ApplianceInput;
