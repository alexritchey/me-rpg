import React from 'react';
import { FlatList, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';
import heroSprite from '../../sprites/heroSprite.js';
import { connect } from 'react-redux';

class CharacterHeader extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <AnimatedSprite
                    sprite={heroSprite}
                    coordinates={{
                        top: 180,
                        left: 16
                    }}
                    animationFrameIndex={heroSprite.animationIndex('IDLE')}
                    loopAnimation={true}
                    fps={1}
                    size={{
                        width: heroSprite.size.width,
                        height: heroSprite.size.height
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

export default connect(mapStateToProps)(CharacterHeader);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 2,
        borderBottomColor: "#eee",
        padding: 15
    },
    characterPose: {
        width: 75,
        height: 84
    }
});
