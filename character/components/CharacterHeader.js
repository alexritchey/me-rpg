import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';
import { connect } from 'react-redux';
import { NAVIGATION_BAR_HEIGHT } from '../../constants/style.js';
import {
    UI_HEADER_EXP_START_SPRITE,
    UI_HEADER_EXP_PROGRESS_SPRITE,
    UI_HEADER_HP_START_SPRITE,
    UI_HEADER_HP_PROGRESS_SPRITE,
    UI_HEADER_MP_START_SPRITE,
    UI_HEADER_MP_PROGRESS_SPRITE,
    heroSprite
} from '../../sprites/index.js';
import ProgressBar from './ProgressBar.js';

const BAR_MAX_HEIGHT = 16;
const BAR_MAX_WIDTH = 150;

const CharacterTopContent = ({ name, level }) => {
    return (
        <View style={styles.characterTopContent}>
            <View style={styles.characterDetailsLeft}>
                <Text style={styles.characterName}>{name}</Text>
                <Text style={styles.characterLevelAndClass}>{`Level ${level}`}</Text>
            </View>
        </View>
    );
};

const CharacterBottomContent = ({ expBarProgress, currentExp, neededExp }) => {
    return (
        <View style={styles.characterBottomContent}>
            <View style={{position: "absolute", top: 0, left: -15, width: "100%", height: "100%"}}>
                <Image source={require('../../images/mock-background.png')} />
            </View>
            
            <View style={styles.characterLeftPanel}>
                <AnimatedSprite
                    sprite={heroSprite}
                    animationFrameIndex={heroSprite.animationIndex('IDLE')}
                    loopAnimation={true}
                    size={heroSprite.size}
                    coordinates={{
                        top: 100,
                        left: 0
                    }}
                    fps={1}
                />
            </View>
            <View style={styles.characterRightPanel}>
                <ProgressBar
                    progress={expBarProgress}
                    currentExp={currentExp}
                    neededExp={neededExp}
                    height={BAR_MAX_HEIGHT}
                    maxWidth={BAR_MAX_WIDTH}
                    startSprite={UI_HEADER_EXP_START_SPRITE.frames[0]}
                    progressSprite={UI_HEADER_EXP_PROGRESS_SPRITE.frames[0]}
                />
            </View>
        </View>
    );
};

class CharacterHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CharacterTopContent {...this.props} />
                <CharacterBottomContent {...this.props} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { current, need } = state.character.status.exp;
    const { name, level } = state.character.status;

    return {
        name,
        level,
        currentExp: current,
        neededExp: need,
        expBarProgress: Math.floor((current / need) * 100)
    };
};

export default connect(mapStateToProps)(CharacterHeader);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#dedede",
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
        // borderBottomColor: "#dedede",
        // borderBottomWidth: 1,
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
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "rgba(0,0,0,0)"
    },
    hpBarGroup: {
        marginBottom: 5
    },
    mpBarGroup: {
        
    }
});
