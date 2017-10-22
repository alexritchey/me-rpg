import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class TodoCell extends React.PureComponent {
    render() {
        return (
            <View style={styles.cell}>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => {}}
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
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    containerStyle={{
                        marginTop:0
                    }}
                    data={this.props.list}
                    renderItem={({item}) => <TodoCell title={item.title} />}
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

export default connect(mapStateToProps)(TodoList);

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
