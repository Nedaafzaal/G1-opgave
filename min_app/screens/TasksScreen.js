//Her bliver der impoteret view,text og FlatList.
//FlatList bliver anvendt til at se listen af opgaver.
import { View, Text, FlatList } from 'react-native';
//Her bliver stylingen impoteret fra Style.js
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