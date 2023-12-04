// SystemInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

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
      onClose(); // Close the modal after adding the system
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.systemModal}>
        <TextInput
          style={styles.input}
          placeholder="System Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Inverter Capacity"
          value={inverterCapacity}
          onChangeText={(text) => setInverterCapacity(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Battery Voltage"
          value={batteryVoltage}
          onChangeText={(text) => setBatteryVoltage(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Battery Capacity"
          value={batteryCapacity}
          onChangeText={(text) => setBatteryCapacity(text)}
          keyboardType="numeric"
        />
        <Button title="Add System" onPress={handleAddSystem} />
        <Button title="Close Modal" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  systemModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '80%',
  },
});

export default SystemInput;
