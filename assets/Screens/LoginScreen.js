// import { StatusBar } from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// export default function Login() {
//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.imageInput}>
//           <TouchableOpacity
//             style={styles.imageInputIcon}
//             onPress={() => Alert.alert('add photo')}
//           >
//             <Text style={styles.lineVertical}></Text>
//             <Text style={styles.lineHorizontal}></Text>
//           </TouchableOpacity>
//         </TouchableOpacity>
//         <Text style={styles.title}>Регістрація</Text>
//         <TextInput style={styles.inputStyles} placeholder="Логін"></TextInput>
//         <TextInput
//           style={styles.inputStyles}
//           placeholder="Електронна пошта"
//         ></TextInput>
//         <TextInput style={styles.inputStyles} placeholder="Пароль"></TextInput>
//         <TouchableOpacity
//           style={styles.formButton}
//           onPress={() => Alert.alert('you register')}
//         >
//           <Text style={styles.btnText}>Зареєструватися</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.formLink}
//           onPress={() => Alert.alert('goto login')}
//         >
//           <Text style={styles.linkText}>Вже маєте аккаунт? Увійти</Text>
//         </TouchableOpacity>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     width: '100%',
//     fontStyle: 'robotoRegular',
//   },
//   container: {
//     flex: 0.65,
//     paddingTop: 92,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingBottom: 45,

//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//   },
//   title: {
//     fontFamily: 'robotoMedium',
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: 'center',
//     color: '#212121',

//     marginBottom: 32,
//   },
//   inputStyles: {
//     backgroundColor: '#F6F6F6',
//     marginBottom: 16,
//     width: '100%',
//     height: 50,
//     borderColor: '#E8E8E8',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingTop: 16,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingBottom: 15,
//     fontSize: 16,
//     lineHeight: 19,

//     color: '#212121',
//   },
//   formButton: {
//     height: 50,
//     width: '100%',
//     alignItems: 'center',
//     paddingTop: 16,
//     paddingLeft: 32,
//     paddingRight: 32,
//     paddingBottom: 16,
//     marginTop: 27,
//     marginBottom: 16,

//     backgroundColor: '#FF6C00',
//     borderRadius: 100,
//   },
//   btnText: {
//     fontSize: 16,
//     lineHeight: 19,

//     color: '#FFFFFF',
//   },
//   formLink: {},
//   linkText: { fontSize: 16, lineHeight: 19, color: '#1B4371' },
//   imageInput: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#F6F6F6',
//     borderRadius: 16,
//     position: 'absolute',
//     top: '-15%',
//   },
//   imageInputIcon: {
//     height: 25,
//     width: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderColor: '#FF6C00',
//     borderRadius: 50,
//     borderWidth: 1,
//     position: 'absolute',
//     bottom: '10%',
//     right: '-10%',
//   },
//   lineVertical: {
//     height: 1,
//     width: 13,
//     backgroundColor: '#FF6C00',
//     transform: [{ rotate: '90deg' }],
//   },
//   lineHorizontal: { height: 1, width: 13, backgroundColor: '#FF6C00' },
// });
