import { StyleSheet } from "react-native";
import { colors } from "../../util/constant/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerText:{
        color:colors.white,
        fontSize:30,
        textAlign:'center'
    },
    forgotPassword:{
        color:colors.white,
        textAlign:'right',
        marginHorizontal:20,
        marginTop:-8,
        marginRight:25

    },
    bottomMainContainer:{
        flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
    },
    bottomContainer:{
        flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginBottom: 50,
            marginTop: 30,
    },
    useTypeSelection:{
        height:50,
        backgroundColor:'#ccbdf8',
        borderWidth:1,
        padding:15,
        borderColor:colors.white,
        marginHorizontal:20,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15,
        elevation: 3,
        shadowColor: colors.black,
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width:200,
        position:'relative'
    
    }
})