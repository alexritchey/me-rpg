import React from 'react';
import { NavigatorIOS, TabBarIOS, View, StyleSheet } from 'react-native';
import TodoList from '../../tasks/components/TodoList.js';
import CharacterHeader from '../../character/components/CharacterHeader.js';

const InitialView = () => {
    return (
        <View style={styles.container}>
            <CharacterHeader />
            <TodoList />
        </View>
    );
};

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        component: InitialView,
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
                            style={{backgroundColor:"black"}}
                        />
                        <TabBarIOS.Item
                            title="Dungeons"
                        />
                        <TabBarIOS.Item
                            title="The Inn"
                        />
                    </TabBarIOS>
                </View>
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
