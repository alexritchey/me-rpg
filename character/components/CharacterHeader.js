import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
// import heroSprite from '../../sprites/heroSprite.js';
import { connect } from 'react-redux';
import { NAVIGATION_BAR_HEIGHT } from '../../constants/style.js';
import { UI_HEADER_EXP_START_SPRITE, UI_HEADER_EXP_PROGRESS_SPRITE } from '../../sprites/index.js';

const EXP_HEIGHT = 20;

const CharacterTopContent = props => {
    return (
        <View style={styles.characterTopContent}>
            <View style={styles.characterDetailsLeft}>
                <Text style={styles.characterName}>Dextron</Text>
                <Text style={styles.characterLevelAndClass}>Level 29 Rogue</Text>
            </View>
        </View>
    );
};

const ExperienceBar = ({ progress }) => {

    const widthFromProgress = progress;

    return (
        <View style={styles.expBar}>
            <Image
                source={UI_HEADER_EXP_START_SPRITE.frames[0]}
                style={styles.expBarStart}
            />
            <Image
                source={UI_HEADER_EXP_PROGRESS_SPRITE.frames[0]}
                style={{
                    height: EXP_HEIGHT,
                    width: widthFromProgress
                }}
                resizeMode={"stretch"}
            />
        </View>
    );
};

const CharacterBottomContent = ({ expProgressPercentage }) => {

    return (
        <View style={styles.characterBottomContent}>
            <View style={styles.characterLeftPanel}>
                <Image
                    style={styles.characterPose}
                    source={require("../../images/mock-character.png")}
                />
            </View>
            <View style={styles.characterRightPanel}>
                <ExperienceBar progress={10}/>
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
        marginTop: NAVIGATION_BAR_HEIGHT,
        padding: 15
    },
    characterPose: {
        width: 75,
        height: 84
    },
    characterTopContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#dedede",
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    characterDetailsLeft: {
        flexDirection: "column"
    },
    characterBottomContent: {
        flex: 5,
        flexDirection: "row"
    },
    characterLeftPanel: {
        flex: 1,
        justifyContent: "flex-end"
    },
    characterName: {
        fontWeight: "bold",
        fontSize: 16
    },
    characterLevelAndClass: {
        fontSize: 12
    },
    characterRightPanel: {
        flex: 1,
        justifyContent: "flex-end"
    },
    expBar: {
        flexDirection: "row"
    },
    expBarStart: {
        width:5,
        height:EXP_HEIGHT
    }
});
