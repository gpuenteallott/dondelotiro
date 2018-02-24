import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Colors, Fonts } from '../Themes'

export default class TrashButton extends React.Component {
    static propTypes = {
        onPress: PropTypes.func,
        icon: PropTypes.string,
        text: PropTypes.string,
        selected: PropTypes.bool
    }

    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                style={{
                    alignSelf: 'center',
                    width: 120,
                    height: 120,
                    backgroundColor: this.props.selected ? '#EF5411' : '#764682',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10
                }}
            >
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon name={this.props.icon} size={60} color="#fff" />
                    <Text style={{ marginTop: 5, color: '#fff' }}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

DondeLoTiroButton.innerTextStyles = {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 23,
};
