import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#FFFCF3"
    },
    btn_style:{
        width:"40%",
        borderRadius:100,
        overflow:'hidden',
        color:"#FF8787",
        marginBottom:15,
        marginTop:15
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
        position:'relative',
        marginTop:50,
        marginBottom:25,
        height:300,
        width:300,
        resizeMode:"center",
        marginTop:60,
        marginBottom:25
    }
})

export const rose_main = "#FF8787"
