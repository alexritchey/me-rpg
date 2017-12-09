import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SegmentedView from 'react-native-segmented-view';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import { TAB_MAP } from '../../constants/tasks.js';
import { H1 } from 'nachos-ui';

import TodoCell from './TodoCell.js';
import HabitCell from './HabitCell.js';
import DailyCell from './DailyCell.js';
import { updateExp, resetLevelAndExp } from '../../character/actions/index';

class TasksView extends React.PureComponent {

    constructor(props, context) {
        super(props, context);
        this._onTapCompleteTodo = this._onTapCompleteTodo.bind(this);
        this._onChangeTab = this._onChangeTab.bind(this);

        this.state = {
            index: 0
        };
    }

    _onTapCompleteTodo(id) {
        this.props.dispatchCompleteTodo(id);
    }

    _onChangeTab(index) {
        const { dispatchChangeTab } = this.props;
        this.setState({ index });
        dispatchChangeTab(TAB_MAP[index]);
    }

    render() {
        let renderCell;
        let data;
        switch (this.state.index) {
            case 0:
                data = this.props.todoList;
                renderCell = ({item}) =>
                    <TodoCell
                        title={item.title}
                        id={item.id}
                        onTapComplete={this._onTapCompleteTodo}
                        onTapCell={this.props.onTriggerModal}
                    />;
                break;
            case 1:
                data = this.props.habitList;
                renderCell = ({item}) =>
                    <HabitCell
                        title={item.title}
                        id={item.id}
                        onTapComplete={this._onTapCompleteTodo}
                        onTapCell={this.props.onTriggerModal}
                    />;
                break;
            case 2:
                data = this.props.dailyList;
                renderCell = ({item}) =>
                    <DailyCell
                        title={item.title}
                        id={item.id}
                        onTapComplete={this._onTapCompleteTodo}
                        onTapCell={this.props.onTriggerModal}
                    />;
                break;
            default:
                data = [];
                renderCell = () => {};
                break;
        }


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
                {data && data.length ?
                    <FlatList
                        data={data}
                        contentContainerStyle={{justifyContent: "flex-start", paddingTop: 15}}
                        automaticallyAdjustContentInsets={false}
                        renderItem={renderCell}
                        keyExtractor={(item, index) => index}
                        style={{flex: 7}}
                    /> :
                    <View style={{flex: 7, alignItems: "center", justifyContent: "center"}}>
                        <H1>Add some tasks!</H1>
                    </View>
                }
                <TodoCell
                    title="Add 80 Experience"
                    onTapComplete={() => this.props.updateExp(80)}
                    onTapCell={() => {}}
                />
                <TodoCell
                    title="Reset Level And Experience"
                    onTapComplete={() => this.props.resetLevelAndExp()}
                    onTapCell={() => {}}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.tasks.todos,
        habitList: state.tasks.habits,
        dailyList: state.tasks.dailies,
        currentTab: state.tasks.currentTab
    };
};

export default connect(mapStateToProps, {...actions, updateExp, resetLevelAndExp})(TasksView);

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
