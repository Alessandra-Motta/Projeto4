import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import Header from './components/Header';
import { useState } from 'react';



export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logar(){
    alert("Seja bem-vindo (a)")
  }

  return(
    <View style={styles.container}>
       <Header />
      <TextInput 
      style={styles.input}
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      placeholder='Digite o login'
    />

      <TextInput 
      style={styles.input}
      onChangeText={(texto) => setSenha(texto)}
      value={senha}
      placeholder='Digite a senha'
      />

      <Button
      title='Logar' 
      onPress={logar}
      />
      
      <Text>Não possuo uma conta</Text>

      <StatusBar style="auto" />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: 500
  },
  

  input: {
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5,
    backgroundColor: 'white'
  }
});
