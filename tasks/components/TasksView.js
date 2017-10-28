import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SegmentedView from 'react-native-segmented-view';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import { TAB_MAP } from '../../constants/tasks.js';
import Modal from 'react-native-modalbox';
import { H1 } from 'nachos-ui';

class TodoCell extends React.PureComponent {
    render() {
        const { onTapComplete, onTapCell } = this.props;
        return (
            <View style={styles.cell}>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => onTapComplete(this.props.id)}
                    activeOpacity={0.9}
                >
                    <View style={styles.cellCheckbox} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cellContent}
                    onPress={() => onTapCell()}
                >
                    <Text style={styles.cellText}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class TasksView extends React.PureComponent {

    constructor(props, context) {
        super(props, context);
        this._onTapComplete = this._onTapComplete.bind(this);
        this._onChangeTab = this._onChangeTab.bind(this);

        this.state = {
            index: 0
        };
    }

    _onTapComplete(id) {
        this.props.dispatchCompleteTodo(id);
    }

    _onChangeTab(index) {
        const { dispatchChangeTab } = this.props;
        this.setState({ index });
        dispatchChangeTab(TAB_MAP[index]);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 42}}>
                    <SegmentedView
                        titles={["Todos", "Habits", "Dailies"]}
                        index={this.state.index}
                        stretch={true}
                        onPress={this._onChangeTab}
                    />
                </View>
                {this.props.list.length ?
                    <FlatList
                        data={this.props.list}
                        contentContainerStyle={{justifyContent: "flex-start", paddingTop: 15}}
                        automaticallyAdjustContentInsets={false}
                        renderItem={({item}) =>
                            <TodoCell
                                title={item.title}
                                id={item.id}
                                onTapComplete={this._onTapComplete}
                                onTapCell={this.props.onTriggerModal}
                            />
                        }
                        keyExtractor={(item, index) => index}
                        style={{flex: 7}}
                    /> :
                    <View style={{flex: 7, alignItems: "center", justifyContent: "center"}}>
                        <H1>Add some tasks!</H1>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.tasks.todos,
        currentTab: state.tasks.currentTab
    };
};

export default connect(mapStateToProps, actions)(TasksView);

const styles = StyleSheet.create({
    container: {
        flex: 4,
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
