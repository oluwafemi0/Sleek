// HomeScreen.js
import React, { useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import ApplianceCard from '../components/ApplianceCard';
import ApplianceInput from '../components/ApplianceInput';
import SystemCard from '../components/SystemCard';
import SystemInput from '../components/SystemInput';

const HomeScreen = () => {
    const [showApplianceModal, setShowApplianceModal] = useState(false);
    const [showSystemModal, setShowSystemModal] = useState(false);


  const [appliances, setAppliances] = useState([]);
  const [systems, setSystems] = useState([]);
  const [applianceClickCount, setApplianceClickCount] = useState({});
  const [systemClickCount, setSystemClickCount] = useState({});

  const handleApplianceCardClick = (index) => {
    const applianceName = appliances[index].name;
    const count = applianceClickCount[applianceName] || 0;
    setApplianceClickCount({ ...applianceClickCount, [applianceName]: count + 1 });
  };

  const handleSystemCardClick = (index) => {
    const systemName = systems[index].name;
    const count = systemClickCount[systemName] || 0;
    setSystemClickCount({ ...systemClickCount, [systemName]: count + 1 });
  };

  const addAppliance = (name, wattage) => {
    const newAppliance = { name, wattage };
    setAppliances([...appliances, newAppliance]);
  };

  const addSystem = (name, inverterCapacity, batteryVoltage, batteryCapacity) => {
    const newSystem = { name, inverterCapacity, batteryVoltage, batteryCapacity };
    setSystems([...systems, newSystem]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
       <View style={{ marginBottom: 20 ,flexDirection:'row'}}>
        <Button title="Add Appliance" onPress={() => setShowApplianceModal(true)} />
        <Button title="Add System" onPress={() => setShowSystemModal(true)} />
      </View>

      {/* Appliance Cards */}
      <ScrollView style={{ marginBottom: 20 }}>
        <Text>Appliance Cards:</Text>
        {appliances.map((appliance, index) => (
          <ApplianceCard
            key={index}
            appliance={appliance}
            onClick={() => handleApplianceCardClick(index)}
          />
        ))}
      </ScrollView>

      {/* System Cards */}
      <ScrollView>
        <Text>System Cards:</Text>
        {systems.map((system, index) => (
          <SystemCard
            key={index}
            system={system}
            onClick={() => handleSystemCardClick(index)}
          />
        ))}
      </ScrollView>

      {/* Displaying click counts for appliances and systems */}
      <View>
        <Text>Appliance Click Counts:</Text>
        {Object.entries(applianceClickCount).map(([appliance, count]) => (
          <Text key={appliance}>
            {appliance}: {count}
          </Text>
        ))}
        <Text>System Click Counts:</Text>
        {Object.entries(systemClickCount).map(([system, count]) => (
          <Text key={system}>
            {system}: {count}
          </Text>
        ))}
      </View>
      <ApplianceInput
        isVisible={showApplianceModal}
        onClose={() => setShowApplianceModal(false)}
        addAppliance={addAppliance}
      />
      <SystemInput
        isVisible={showSystemModal}
        onClose={() => setShowSystemModal(false)}
        addSystem={addSystem}
      />
    </View>
  );
};

export default HomeScreen;
