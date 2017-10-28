import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'nachos-ui';
import { Modal } from 'react-native-modalbox';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';

class AddTaskView extends React.PureComponent {
    render() {
        return (
            <Modal
                style={styles.container}
                ref={"modal1"}
                swipeToClose={this.state.swipeToClose}
                onClosed={this.onClose}
                onOpened={this.onOpen}
                onClosingState={this.onClosingState}
            >
                <Text style={styles.text}>Basic modal</Text>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps, actions)(AddTaskView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        justifyContent: "flex-start"
    },
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
