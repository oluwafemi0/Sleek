import React, { useState } from 'react';
import { View, ScrollView, Text, Button, TouchableOpacity,Pressable  } from 'react-native';
import ApplianceCard from '../components/ApplianceCard';
import ApplianceInput from '../components/ApplianceInput';
import SystemCard from '../components/SystemCard';
import SystemInput from '../components/SystemInput';

const HomeScreen = () => {
    const [showApplianceModal, setShowApplianceModal] = useState(false);
    const [showSystemModal, setShowSystemModal] = useState(false);
    const [appliances, setAppliances] = useState([]);
    const [systems, setSystems] = useState([]);
    const [totalWattage, setTotalWattage] = useState(0);
    const [totalBackupPowerCapacity, setTotalBackupPowerCapacity] = useState(0);
  
  const [applianceClickCount, setApplianceClickCount] = useState({});
  const [systemClickCount, setSystemClickCount] = useState({});

    

  const performCalculations = () => {
    let wattage = 0;
    appliances.forEach((appliance) => {
      const clickCount = applianceClickCount[appliance.name] || 0;
      wattage += appliance.wattage * clickCount;
    });
    setTotalWattage(wattage);
  
    let backupPowerCapacity = 0;
    systems.forEach((system) => {
      const result = (system.batteryCapacity * system.batteryVoltage * 0.8) / wattage;
      backupPowerCapacity += result;
    });
    const roundedBackupTime = Math.ceil(backupPowerCapacity);
    setTotalBackupPowerCapacity(roundedBackupTime);
  };

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

        <View style={{ marginBottom: 20 }}>
        <View style={{ marginBottom: 20,flexDirection:'row',justifyContent:'space-evenly', backgroundColor: 'white', }}>
        <TouchableOpacity onPress={() => setShowApplianceModal(true)} style={{ padding: 30,margin:5,backgroundColor: 'white',borderWidth:1,borderColor:'#b19cd9', borderRadius: 5  }}>
          <Text style={{ fontSize: 35, color: '#b19cd9', textAlign: 'center',fontWeight:"bold", }}>+</Text>
          <Text style={{ fontSize: 15, color: '#b19cd9',fontWeight:"bold", }}>Add Appliance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowSystemModal(true)} style={{ padding: 30,margin:5,backgroundColor: 'white',borderWidth:1,borderColor:'#b19cd9', borderRadius: 5  }}>
          <Text style={{ fontSize: 35, color: '#b19cd9', textAlign: 'center',fontWeight:"bold", }}>+</Text>
          <Text style={{ fontSize: 15, color: '#b19cd9',fontWeight:"bold", }}>Add System</Text>
        </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={performCalculations} style={{ padding: 10,  backgroundColor: '#b19cd9', borderRadius: 5 }}>
          <Text style={{ fontSize: 15, color: '#fff',fontWeight:"400", textAlign: 'center' }}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#b19cd9',padding: 20, borderRadius: 5 }}>
        <View>
          <Text style={{ fontSize: 15,textAlign: 'center',color: 'white',fontWeight:"bold" }}>Total Load</Text>
          <Text style={{ fontSize: 24,textAlign: 'center',color: 'white', }}>{totalWattage} w</Text>
        </View>
        <View>
          <Text style={{ fontSize: 15,textAlign: 'center',color: 'white',fontWeight:"bold" }}>Backup Capacity</Text>
          <Text style={{ fontSize: 24,textAlign: 'center',color: 'white', }}>{totalBackupPowerCapacity} hrs</Text>
        </View>
      </View>


        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly',}}>
      <View style={{margin:5, height:230,  backgroundColor: 'white', }}>
        <Text style={{margin:5, fontSize: 15, color: '#b19cd9',fontWeight:"400", textAlign: 'left',fontWeight:"bold" }}>Available Appliances</Text>
      <ScrollView style={{ margin:10,  }}>
        {appliances.map((appliance, index) => (
          <ApplianceCard
            key={index}
            appliance={appliance}
            onClick={() => handleApplianceCardClick(index)}
          />
        ))}
      </ScrollView>
      </View>

      <View style={{margin:5, height:90,  backgroundColor: 'white', }}>
        <Text style={{margin:5, fontSize: 15, color: '#b19cd9',fontWeight:"400", textAlign: 'left',fontWeight:"bold" }}>Available Systems</Text>
      <ScrollView style={{margin:10, }}>
        {systems.map((system, index) => (
          <SystemCard
            key={index}
            system={system}
            onClick={() => handleSystemCardClick(index)}
          />
        ))}
      </ScrollView>
      </View>
      </View>

      <View style={{ height:230,  backgroundColor: 'white',flexDirection:'row',padding: 5, backgroundColor:'#b19cd9', borderRadius: 5,justifyContent:'space-evenly',}}>
      <View>
        <Text style={{margin:10,fontSize: 15, color: 'white', textAlign: 'left',fontWeight:"bold" }}>Appliance Counter</Text>
        {Object.entries(applianceClickCount).map(([appliance, count]) => (
          <Text style={{margin:10,fontSize: 10, color: 'white', textAlign: 'left' }} key={appliance}>
            {appliance} x {count}
          </Text>
        ))}
        </View>
        <View>
        <Text style={{margin:10,fontSize: 15, color: 'white', textAlign: 'left' ,fontWeight:"bold"}}>System Counter</Text>
        {Object.entries(systemClickCount).map(([system, count]) => (
            
          <Text style={{margin:10,fontSize: 10, color: 'white', textAlign: 'left' }} key={system}>
            {system} x {count}
          </Text>
        ))}
        </View>
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
