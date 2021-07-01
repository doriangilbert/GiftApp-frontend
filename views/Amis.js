//core

import { Image, Pressable, SectionList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

//style

//import style from '../Style';

const Amis = (props) => {

  const DATA = [
    {
      index: 0,
      title: "Mes Invitations :",
      data: ["Dupond Dupont", "Dupond Dupont"]
    },
    {
      index: 1,
      title: "Mes Amis :",
      data: ["Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont", "Dupond Dupont"]
    }
  ];

  const Item1 = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Profil appuyé"), props.navigation.navigate("ProfilAmi")}} style={style.itemelement}>
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/photo.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Confirmer appuyé")}}>
        {/* <Image
          style={[style.confirm, style.flexelement]}
          source={require("../assets/confirm.svg")}
        />*/}
        <FontAwesome name="check" size={35} style={style.flexelement} />
      </Pressable>
      <Pressable onPress={() => {console.log("Annuler appuyé")}}>
        {/* <Image
          style={[style.cancel, style.flexelement]}
          source={require("../assets/cancel.svg")}
        /> */}
        <FontAwesome name="times" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );

  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Profil appuyé"), props.navigation.navigate("ProfilAmi")}} style={style.itemelement}>
        <Image
            style={[style.itemphoto, style.flexelement]}
            source={require("../assets/photo.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={style.view}>
        <View style={styles.button}>
            <TouchableOpacity
                style={styles.sign}
                onPress={() => { console.log("Ajouter un ami appuyé"), props.navigation.navigate("AjoutAmis") }}
            >
                <LinearGradient
                    colors={['#FF8787', '#f39a9a']}
                    style={styles.sign}
                >
                    <Text style={[styles.textSign, { color: '#fff' }]}>Ajouter un ami</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => {
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

export default Amis;

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
