import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',   
        backgroundColor:'#1f1e25',  
        flexDirection: 'row',
        borderRadius: 5,
        alignItems:'center',
        marginBottom: 10

    },
    name:{
        flex: 1,
        color:'#eee',
        fontSize: 16, 
        marginLeft: 16    
    },
    buttonText:{
        color:'#eee',
        fontSize: 24
    },
    button:{
        width: 56,
        height: 56,
        backgroundColor: '#e23c44',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',        
    },
  });

  export default styles;