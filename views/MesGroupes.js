//Importation de React, des composants associés et du style (style récupéré dans le fichier global de style et rendu avec l'attribut "style" d'un composant)

import { Image, Pressable, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

const MesGroupes = (props) => {

  //Données de la liste récupérées en format JSON
  const DATA = [
    {
      index: 0,
      title: "Mes Invitations :",
      data: ["Groupe", "Groupe"]
    },
    {
      index: 1,
      title: "Mes Groupes :",
      data: ["Groupe", "Groupe", "Groupe", "Groupe", "Groupe", "Groupe"]
    }
  ];

  //Composant personnalisé "Item1" contenant le rendu d'un item de la première section "Mes Invitations"
  const Item1 = ({ title }) => (
    //Composant "View" contenant tous les éléments de l'item (photo, nom, boutons confirmer/annuler)
    <View style={style.item}>
      {/* 
        Composant "Pressable" permettant de rendre cliquable les composants qu'il contient (méthode onPress exécutée lors d'un clic, dans ce cas on envoie un message dans la console et on redirige vers une autre page) 
        Profil du groupe
      */}
      <Pressable onPress={() => {console.log("Profil appuyé"), props.navigation.navigate("Groupe")}} style={style.itemelement}>
        {/* 
          Composant "Image" permettant de rendre une image (l'attribut source contient l'emplacement de l'image) 
          Photo de Profil du groupe
        */}
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        {/* 
          Composant "Text" permettant de rendre un texte
          Nom du groupe
        */}
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
      {/*
        Rend cliquable l'icone
      */}
      <Pressable onPress={() => {console.log("Confirmer appuyé")}}>
        {/* <Image
          style={[style.confirm, style.flexelement]}
          source={require("../assets/confirm.svg")}
        />*/}
        {/*
          Composant "FontAwesome" (qui n'est pas un composant React Native) permettant d'utiliser le service FontAwesome permettant d'avoir des icones facilement
          Bouton confirmer pour accepter l'invitation
        */}
        <FontAwesome name="check" size={35} style={style.flexelement} />
      </Pressable>
      <Pressable onPress={() => {console.log("Annuler appuyé")}}>
        {/* <Image
          style={[style.cancel, style.flexelement]}
          source={require("../assets/cancel.svg")}
        /> */}
        {/*
          Bouton annuler pour refuser l'invitation
        */}
        <FontAwesome name="times" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );
  
  //Composant personnalisé "Item" contenant le rendu d'un item de la section suivante "Mes Groupes" (meme chose que dans "Item1" mais sans les boutons de confirmation/d'annulation)
  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Profil appuyé"), props.navigation.navigate("Groupe")}} style={style.itemelement}>
        <Image
            style={[style.itemphoto, style.flexelement]}
            source={require("../assets/photo.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
    </View>
  );

  //Fonction return permettant le rendu de la page, il contient le squelette de la page
  return (
    //Composant "View" contenant tous les éléments de la page (bouton et liste sectionnée)
    <View style={style.view}>
        {/* 
          Composant "View" caractérisant un bouton
          Bouton de création d'un groupe
        */}
        <View style={style.button}>
            {/* 
              Composant "TouchableOpacity" similaire au composant "Pressable" qui permet de rendre cliquable les éléments qu'il contient
            */}
            <TouchableOpacity
                style={style.sign}
                onPress={() => { console.log("Créer un groupe appuyé"), props.navigation.navigate("CreationGroupe") }}
            >
                {/* 
                  Composant "LinearGradient" permettant de faire un dégradé au bouton
                */}
                <LinearGradient
                    colors={['#FF8787', '#f39a9a']}
                    style={style.sign}
                >
                    {/* 
                      Composant "Text" qui représente le texte du bouton
                    */}
                    <Text style={[style.textSign, { color: '#fff' }]}>Créer un groupe</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      
      {/* 
        Composant "SectionList" permettant de rendre une liste sectionnée avec les données récupérées au format JSON
      */}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => {
          {/* 
            Rendu conditionnel, permet de rendre les items differemment en fonction de leur section, si on est dans la première section on utilisera Item1 sinon on utilisera Item, on utilise l'attribut "index" pour connaitre la position de la section
          */}
          if (section.index === 0) {
            return <Item1 title={item} />
          }
          else {
            return <Item title={item} />
          }
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={style.header}>{title}</Text>
        )}
      />
    </View>
  )
}

export default MesGroupes;

{/*
const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
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
  confirm: {
    width: 39,
    height: 39
  },
  cancel: {
    width: 32,
    height: 32
  },
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
  }
};

const styles = StyleSheet.create({
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
    }
});
*/}