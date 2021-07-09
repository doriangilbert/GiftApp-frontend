import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor:"#FFFCF3"
    },
    view_top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        backgroundColor:"#FFFCF3"
    },
    btn_style:{
        width:"40%",
        borderRadius:25,
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
        marginTop:60,
        marginBottom:25,
        height:300,
        width:300,
        resizeMode:"center"
    },
    logo2:{
        position:'relative',
        marginTop:60,
        height:285,
        width:285,
        resizeMode:"center"
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
        margin:10,
        marginBottom: 15
    },
    btn_profil:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:10
    },
    //Partie Amis/Groupes + Profil et ListeCadeaux
    item: {
        backgroundColor: "transparent",
        padding: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    header: {
        fontSize: 22,
        backgroundColor: "transparent"
    },
    itemtitle: {
        color: "#D74848",
        fontSize: 20
    },
    itemphoto: {
        width: 70,
        height: 70
    },
    /*confirm: {
    width: 39,
    height: 39
    },
    cancel: {
    width: 32,
    height: 32
    },*/
    itemelement: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center"
    },
    flexelement: {
        marginHorizontal: 5
    },
    bouton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: "10%",
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#FF8787",
        margin: 10,
        width: "55%"
    },
    txtBouton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#FFFFFF",
        width: "100%",
        textAlign: "center"
    },
    button: {
        alignItems: 'center',
        width: "50%",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15
    },
    sign: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    mainphoto: {
        width: 150,
        height: 150, 
        marginBottom: 20
    },
    txtChampTexte: {
        color: "#D74848",
        marginTop: 15, 
        fontSize: 20
    },
    champTexte: {
        marginVertical: 10,
        padding: 10,
        width: "70%",
        borderWidth: 1, 
        borderColor: "#D74848",
        borderRadius: 10
    },
    btnValider: {
        marginTop: 20
    },
    champRecherche: {
        marginVertical: 20,
        padding: 10,
        width: "70%",
        borderWidth: 1,
        borderColor: "#D74848",
        borderRadius: 10
    },
    title: {
        color: "#D74848",
        fontSize: 30,
        marginBottom: 5
    },
    mainphotoprofil: {
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom: 20
    },
    description: {
        color: "#D74848",
        fontSize: 20,
        margin: 20,
        width: "60%"
    },
    champParticipation: {
        marginVertical: 20,
        padding: 10,
        width: "20%",
        borderWidth: 1,
        borderColor: "#D74848",
        borderRadius: 10
    },
    text: {
        color: "#D74848",
        fontSize: 20,
        margin: 20
    }
})

export const rose_main = "#FF8787"
