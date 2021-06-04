import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FFFCF3"
    },
    btn_style:{
        width:"30%",
        borderRadius:1000,
        overflow:'hidden',
        color:"#FF8787",
        marginBottom:10,
        marginTop:10
    },
    footerSocial:{
        flex:1,
        position:'absolute',
        bottom:0,
        width:"100%",
        height:"25%"
    },
    footerSocialInt:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    elementSocial:{
        backgroundColor:"green",
        position:"relative",
        width:50,
        height:50, 
        marginLeft:"5%",
        marginRight:"5%",
        top:10
    },
    footerimg:{
        flex:1,
        resizeMode:'cover',
        justifyContent:"center"
    },
    logo:{
        height:200,
        width:200,
        resizeMode:"center",
    }
})