import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if(!fontsLoaded) {
    return ( 
      <Loading />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09090A',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 45,
  }
});
