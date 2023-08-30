import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { AlignItems, ImageContainer, ImageView, ItemImage, MainListWrapper, Text1, TextContainer, Text2, ImageText, DotSvgImage, Imagetry } from '../ListItem/listItem-styles'
import { Svg, Circle, Ellipse } from 'react-native-svg'

export default function ListItem({ cover, heading, paragraph, date, svgIcon }) {
    return (

        <MainListWrapper>
            <AlignItems>
                <ImageText>
                    <ImageContainer>

                        <ImageBackground source={cover} style={{ flex: 1, }} resizeMode='cover' />


                    </ImageContainer>
                    <TextContainer>
                        <Text1>{heading}</Text1>
                        <Text2>{paragraph}</Text2>
                        <Text2>{date}</Text2>
                    </TextContainer>
                </ImageText>
                <DotSvgImage>
                    
                       <Image source={svgIcon}/>
                
                </DotSvgImage>

            </AlignItems>
        </MainListWrapper>



    )
}
