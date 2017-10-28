import React from 'react';
import { NavigatorIOS, TabBarIOS, View, StyleSheet, Text } from 'react-native';
import TasksView from '../../tasks/components/TasksView.js';
import Modal from 'react-native-modalbox';
import CharacterHeader from '../../character/components/CharacterHeader.js';

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
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        component: InitialView,
                        passProps: {
                            onTriggerModal: this._onTriggerModal
                        },
                        title: "Home"
                    }}
                />
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
                    style={{flex: 1, backgroundColor: "white"}}
                    ref={(modal) => { this.todoSettingsModal = modal; }}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                >
                    <Text style={styles.text}>Basic modal</Text>
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
        flex: 1
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
