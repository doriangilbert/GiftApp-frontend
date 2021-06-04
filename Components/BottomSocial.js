import React from 'react'
<<<<<<< HEAD
import { View, ImageBackground } from 'react-native'
import { SocialIcon } from 'react-native-elements'
=======
import { View, ImageBackground, Linking } from 'react-native'
import { SocialIcon } from 'react-native-elements'


>>>>>>> daniel

import style from '../Style'

export const BottomSocial = () => {
    return(
        <View style={style.footerSocial}>
            <ImageBackground source={require("../assets/footer.png")} style={style.footerimg}>
                <View style={style.footerSocialInt}>
<<<<<<< HEAD

                    <SocialIcon
                      type='twitter'
                      style={style.elementSocial}
                    />
                    <SocialIcon
                      type='facebook'
                      style={style.elementSocial}
                    />
                    <SocialIcon
                      type='instagram'
                      style={style.elementSocial}
                    />

=======
                    <SocialIcon style={style.elementSocial} type="facebook" onPress={() => {Linking.openURL("https://facebook.com")}}/>
                    <SocialIcon style={style.elementSocial} type="instagram" onPress={() => {Linking.openURL("https://instagram.com")}}/>
                    <SocialIcon style={style.elementSocial} type="twitter" onPress={() => {Linking.openURL("https://twitter.com")}}/>
>>>>>>> daniel
                </View>
            </ImageBackground>
        </View>
    )
}
