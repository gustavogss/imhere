import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participants } from '../../components/Participants';
import styles from './styles'

export function Home() {
    const participants = ['Gustavo', 'Guilherme', 'Silva', 'Souza', 'Maria', 'Pedro', 'Rodrigo', 'Paulo', 'Fernando']
    
    function handleParticipantAdd(){
      if(participants.includes("Gustavo")){
        return Alert.alert('Participante existe', 'Já existe um particiante na lista com esse nome')
      }            
    }

    function handleParticipantRemove(name: string){
      Alert.alert('Remover', `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deltado!')
        },
        {
          text: 'Não',
          style:'cancel'
        }
      ])        
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
       <Text style={styles.eventDate}>Sexta, 20 de Janeiro de 2023</Text>
       <View style={styles.form}>
       <TextInput 
       style={styles.input}
       placeholder='Nome do participante'
       placeholderTextColor='#6b6b6b'
       />
       <TouchableOpacity 
       style={styles.button}
       onPress={handleParticipantAdd}
       >
        <Text style={styles.buttonText}>+</Text>
       </TouchableOpacity>
       </View>
       <FlatList 
       data={participants}
       keyExtractor={item => item}
       renderItem={({item})=> (
        <Participants 
        key={item} 
        name={item}
         onRemove={()=>handleParticipantRemove(item)} />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=>(
      <Text style={styles.listEmptyText}>
        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
      </Text>
    )}
    />
    </View>
  )
}