import React from 'react';
import { View, Text, Image } from 'react-native';

const ProgressBar = props => {
    const {
        progress,
        currentExp,
        neededExp,
        height,
        maxWidth,
        startSprite,
        progressSprite
    } = props;

    const styles = Object.assign({
        progressBar: {
            flexDirection: "row",
            width: maxWidth,
            height,
            backgroundColor: "#dedede"
        },
        progressBarStart: {
            width:4,
            height
        },
        progressBarLabelGroup: {
            flexDirection: "row"
        },
        progressBarCountLabel: {
            flex: 1,
            paddingTop: 2,
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "right"
        }
    }, (props.styles || {}));

    const widthFromProgress = (progress / 100) * maxWidth;

    return (
        <View>
            <View style={styles.progressBar}>
                <Image
                    source={startSprite}
                    style={styles.progressBarStart}
                />
                <Image
                    source={progressSprite}
                    style={{
                        height: height,
                        maxWidth: maxWidth,
                        width: widthFromProgress
                    }}
                    resizeMode={"stretch"}
                />
            </View>
            <View style={styles.progressBarLabelGroup}>
                <Text style={styles.progressBarCountLabel}>{`${currentExp} / ${neededExp}`}</Text>
            </View>
        </View>
    );
};

export default ProgressBar;
