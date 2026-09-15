//Her bliver der importeret view,text og FlatList.
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
{/*Her bliver FlatList brugt til at vise alle opgaverne*/}
      <FlatList
        data={tasks}// Her bliver opgaverne hentet fra tasklisten.
        keyExtractor={(item) => item.id}//Hver opgave bliver tildelt en id
        renderItem={({ item }) => (
          <Text style={styles.task}>
            {item.title}
          </Text>
        )}
      />

    </View>
  );
}
