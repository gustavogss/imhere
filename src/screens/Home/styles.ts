import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#000',
      padding: 24
    },
    eventName:{
      color: '#ccc',
      fontSize: 24,
      marginTop: 48
    },
    eventDate:{
      color: '#aaa',
      fontSize: 16  
    },
    input:{
        flex:1,
        width:'100%',
        height: 56,
        backgroundColor:'#1f1e25',
        borderRadius:5,
        color: '#eee',        
        padding: 16,
        fontSize: 16,  
        marginRight: 12,      
    },
    buttonText:{
        color:'#eee',
        fontSize: 24
    },
    button:{
        width: 56,
        height: 56,
        backgroundColor: '#31cf67',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',        
    },
    form:{
        width:'100%',
        flexDirection: 'row',
        marginTop:16,
        marginBottom: 42        
    }
  });

  export default styles;