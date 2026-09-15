//Her bliver der importeret View, text og button.
//Button bliver brugt til at navigere mellem de forskellige screens. 
import { View, Text, Button } from 'react-native';
import styles from '../styles/Style';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        StudieOverblik
      </Text>

      <Text style={styles.text}>
        Få overblik over dine lektier og afleveringer.
      </Text>
{/*Knappen bruges til at sende brugeren videre til opgavelisten */}
      <Button
        title="Se mine opgaver"
        onPress={() => navigation.navigate('Tasks')}
      />
{/*Knappen bruges til at sende brugeren videre til screen hvor man tilføjer opgave/aktivitet*/}
      <Button
        title="Tilføj aktivitet"
        onPress={() => navigation.navigate('AddTask')}
      />

    </View>
  );
}