import { View, Text, FlatList } from 'react-native';
import styles from '../styles/Style';

export default function TasksScreen({ tasks }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Mine opgaver
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.task}>
            {item.title}
          </Text>
        )}
      />

    </View>
  );
}