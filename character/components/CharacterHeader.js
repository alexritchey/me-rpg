import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
// import heroSprite from '../../sprites/heroSprite.js';
import { connect } from 'react-redux';
import { NAVIGATION_BAR_HEIGHT } from '../../constants/style.js';

const CharacterTopContent = props => {
    return (
        <View style={styles.characterTopContent}>
            <Text>Dextron</Text>
        </View>
    );
};

const CharacterBottomContent = props => {
    return (
        <View style={styles.characterBottomContent}>
            <View style={styles.characterLeftPanel}>
                <Image style={styles.characterPose} source={require("../../images/mock-character.png")} />
            </View>
            <View style={styles.characterRightPanel}>

            </View>
        </View>
    );
};

class CharacterHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CharacterTopContent />
                <CharacterBottomContent />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(CharacterHeader);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#dedede",
        paddingTop: NAVIGATION_BAR_HEIGHT + 15,
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    characterPose: {
        width: 75,
        height: 84
    },
    characterTopContent: {
        flex: 1,
        borderBottomColor: "#dedede",
        borderBottomWidth: 1
    },
    characterBottomContent: {
        flex: 5,
        flexDirection: "row"
    },
    characterLeftPanel: {
        flex: 1,
        justifyContent: "flex-end"
    },
    characterRightPanel: {
        flex: 1
    }
});
