import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class TodoCell extends React.PureComponent {
    render() {
        return (
            <View style={styles.cell}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

class TodoList extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
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
        flex: 1,
        justifyContent: 'center'
    },
    cell: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#eeeeee"
    }
});
