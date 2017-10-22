import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';

class TodoCell extends React.PureComponent {
    render() {
        const { onTapComplete } = this.props;
        return (
            <View style={styles.cell}>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => onTapComplete(this.props.id)}
                    activeOpacity={0.9}
                >
                    <View style={styles.cellCheckbox} />
                </TouchableOpacity>
                <View style={styles.cellContent}>
                    <Text style={styles.cellText}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

class TodoList extends React.PureComponent {

    constructor(props, context) {
        super(props, context);
        this._onTapComplete = this._onTapComplete.bind(this);
    }

    _onTapComplete(id) {
        this.props.dispatchCompleteTodo(id);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    containerStyle={{
                        marginTop:0
                    }}
                    data={this.props.list}
                    renderItem={({item}) => <TodoCell title={item.title} id={item.id} onTapComplete={this._onTapComplete} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.tasks.todos
    };
};

export default connect(mapStateToProps, actions)(TodoList);

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: "#f9f9f9"
    },
    cell: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10
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
