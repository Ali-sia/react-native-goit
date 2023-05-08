import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Register() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Регістрація</Text>
        <TextInput style={styles.inputStyles} placeholder="Логін"></TextInput>
        <TextInput
          style={styles.inputStyles}
          placeholder="Електронна пошта"
        ></TextInput>
        <TextInput style={styles.inputStyles} placeholder="Пароль"></TextInput>
        <Button
          style={styles.formButton}
          onPress={() => Alert.alert('you register')}
          title="Зареєструватися"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    flex: 0.65,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,

    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontFamily: 'robotoMedium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',

    marginBottom: 32,
  },
  inputStyles: {
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    width: '100%',
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',
  },
  formButton: {
    flex: 1,
    // align-items: center;
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    // gap: 12px;

    // position: absolute;
    // height: 51px;
    // left: 16px;
    // right: 16px;
    // bottom: 113px;

    backgroundColor: '#FF6C00',
    // border-radius: 100px;
  },
});
