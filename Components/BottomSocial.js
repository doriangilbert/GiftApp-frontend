import React from 'react'
import { View, ImageBackground } from 'react-native'
import { SocialIcon } from 'react-native-elements'

import style from '../Style'

export const BottomSocial = () => {
    return(
        <View style={style.footerSocial}>
            <ImageBackground source={require("../assets/footer.png")} style={style.footerimg}>
                <View style={style.footerSocialInt}>

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

                </View>
            </ImageBackground>
        </View>
    )
}
