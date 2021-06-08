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
    },
    photo:{
        position:'relative',
        resizeMode:"center",
        height:100
    },
    nom_prenom_M:{
        fontSize:24,
        margin:10
    },
    nom_prenom_L:{
        fontSize:26
    },
    nom_prenom_S:{
        fontSize:17
    },
    desc_profil:{
        width:"70%",
        margin:30
    },
    mail:{
        fontWeight:'bold',
        fontSize:17,
        margin:10
    },
    btn_profil:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10
    }
})

export const rose_main = "#FF8787"
