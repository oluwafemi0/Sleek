// ApplianceInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const ApplianceInput = ({ addAppliance, isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [wattage, setWattage] = useState('');

  const handleAddAppliance = () => {
    if (name && wattage) {
      addAppliance(name, parseInt(wattage));
      setName('');
      setWattage('');
      onClose(); // Close the modal after adding the appliance
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.applianceModal}>
        <TextInput
          style={styles.input}
          placeholder="Appliance Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Wattage"
          value={wattage}
          onChangeText={(text) => setWattage(text)}
          keyboardType="numeric"
        />
        <Button title="Add Appliance" onPress={handleAddAppliance} />
        <Button title="Close Modal" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  applianceModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '80%',
  },
});

export default ApplianceInput;
