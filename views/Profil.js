//core
import React from 'react';
import { Text, View, Image, TouchableOpacity,Button } from 'react-native';
 
import { LinearGradient } from 'expo-linear-gradient';

//style
import style from '../Style';

import { styles } from "./Connexion";

export default class Profil extends React.Component {



  render() {
    return (
      <View style={style.view}>

        
          <Image  style={[style.photo, {height:200,marginTop:"15%"}]}  
                        source={require("../assets/photo.png")} 
          />
        
        
          <Text style={style.nom_prenom_M}> Dupond Dupond</Text>
        
        
          <Text style={style.desc_profil}>“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”“-Motus et bouche cousue : c’est notre devise. -Oui, botus et mouche cousue : c’est votre denise.”</Text>
        
        
          <Text style={style.mail}>duponddupont@gmail.com</Text>
        
        
        <View style={style.btn_profil}>

          <View style={[style.btn_style, {width:200,marginBottom:0,marginTop:30}]}>
            <Button
              color="#FF8787"
              title="Paramètres"
              onPress={() => {this.props.navigation.navigate("Parametres")}}
            />
          </View> 
          
          <View style={[style.btn_style, {width:200,marginBottom:0}]}>
            <Button
              color="#FF8787"
              title="éditer mon profil"
              onPress={() => {this.props.navigation.navigate("EditProfil")}}
            />
          </View>

          <View style={[style.btn_style, {width:200,marginBottom:0}]}>
            <Button
              color="#FF8787"
              title="Déconnexion"
              onPress={() => {}}
            />
          </View>
          
        </View>

      </View>
    )
  }
}

