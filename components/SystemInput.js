import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet,TouchableOpacity,Text } from 'react-native';

const SystemInput = ({ addSystem, isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [inverterCapacity, setInverterCapacity] = useState('');
  const [batteryVoltage, setBatteryVoltage] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');

  const handleAddSystem = () => {
    if (name && inverterCapacity && batteryVoltage && batteryCapacity) {
      addSystem(name, parseInt(inverterCapacity), parseInt(batteryVoltage), parseInt(batteryCapacity));
      setName('');
      setInverterCapacity('');
      setBatteryVoltage('');
      setBatteryCapacity('');
      onClose(); 
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.systemModal}>
        <TextInput
          style={styles.input}
          placeholder="System Name"
          value={name}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Inverter Capacity"
          value={inverterCapacity}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setInverterCapacity(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Battery Voltage"
          value={batteryVoltage}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setBatteryVoltage(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Battery Capacity"
          value={batteryCapacity}
          placeholderTextColor='#b19cd9'
          onChangeText={(text) => setBatteryCapacity(text)}
          keyboardType="numeric"
        />

        <View style={{ marginBottom: 20,flexDirection:'row',justifyContent:'space-evenly', }}>
        <TouchableOpacity onPress={handleAddSystem} style={styles.button}>
          <Text style={{ fontSize: 18, color: 'white' }}>Add System</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={[styles.button,]}>
          <Text style={{ fontSize: 18, color: 'white' }}>Close Modal</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  systemModal: {
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

export default SystemInput;
