import React from 'react';
import { NavigatorIOS, TabBarIOS, View, StyleSheet } from 'react-native';
import TodoList from '../../tasks/components/TodoList.js';

const InitialView = () => {
    return (
        <View style={styles.container}>
            <TodoList />
        </View>
    );
};

export default class Root extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <NavigatorIOS
                    style={{flex: 10}}
                    initialRoute={{
                        component: InitialView,
                        title: "Home"
                    }}
                />
                <TabBarIOS style={{flex: 1}}>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
