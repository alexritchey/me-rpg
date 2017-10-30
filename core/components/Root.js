import React from 'react';
import { TabBarIOS, View, StyleSheet, Navigator } from 'react-native';
import TasksView from '../../tasks/components/TasksView.js';
import Modal from 'react-native-modalbox';
import AddTodoView from '../../tasks/components/AddTodoView.js';
import CharacterHeader from '../../character/components/CharacterHeader.js';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import { StackNavigator } from 'react-navigation';

const InitialView = props => {
    return (
        <View style={styles.container}>
            <CharacterHeader />
            <TasksView
                {...props}
            />
        </View>
    );
};

export default class Root extends React.Component {

    constructor(props, context) {
        super(props, context);
        this._onTriggerModal = this._onTriggerModal.bind(this);
    }

    _onTriggerModal() {
        if (this.todoSettingsModal) {
            this.todoSettingsModal.open();
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}>
                    <NavigationBar
                        title={{ title: 'Home' }}
                        rightButton={{
                            title: "Add",
                            handler: this._onTriggerModal
                        }}
                    />
                    <InitialView onTriggerModal={this._onTriggerModal}/>
                </View>
                <View style={{height:50}}>
                    <TabBarIOS>
                        <TabBarIOS.Item
                            onPress={() => console.log("hi")}
                            title="Home"
                        />
                        <TabBarIOS.Item
                            title="Tasks"
                        />
                        <TabBarIOS.Item
                            title="Dungeons"
                        />
                        <TabBarIOS.Item
                            title="The Inn"
                        />
                    </TabBarIOS>
                </View>
                <Modal
                    style={{flex: 0.65, padding: 16}}
                    ref={(modal) => { this.todoSettingsModal = modal; }}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                    position={"bottom"}
                >
                    <AddTodoView successCallback={() => this.todoSettingsModal.close()} />
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9"
    },
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    instructions: {
        flex: 1,
        marginBottom: 5,
        padding: 10
    },
    text: {
        flex: 1,
        textAlign: "left"
    }
});
