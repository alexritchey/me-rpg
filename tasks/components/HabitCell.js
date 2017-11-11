import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HabitCell = props => {
    const { onTapComplete, onTapCell, title, id } = props;
    return (
        <View style={styles.cell}>
            <TouchableOpacity
                style={{flex: 1}}
                onPress={() => onTapComplete(id)}
                activeOpacity={0.9}
            >
                <View style={styles.cellCheckbox} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cellContent}
                onPress={() => onTapCell()}
            >
                <Text style={styles.cellText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HabitCell;

const styles = StyleSheet.create({
    cell: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    cellContent: {
        flex: 4,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "white"
    },
    cellCheckbox: {
        flex: 1,
        backgroundColor: "#2ecc71"
    }
});
