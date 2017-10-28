import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { View, StyleSheet } from 'react-native';
import { Button, Input, H2 } from 'nachos-ui';

class AddTodoView extends React.Component {

    constructor(props, context) {
        super(props, context);

        this._onAddTodo = this._onAddTodo.bind(this);

        this.state = {
            descriptionValue: ""
        };
    }

    _onAddTodo() {
        const { dispatchAddTodo } = this.props;
        dispatchAddTodo(this.state.descriptionValue);

        if(this.props.successCallback) {
            this.props.successCallback();
        }
    }

    render() {
        return (
            <View>
                <H2>Add New Todo</H2>
                <Input
                    placeholder="Todo Description"
                    value={this.state.descriptionValue}
                    onChangeText={value => this.setState({ descriptionValue: value })}
                />
                <Button
                    onPress={this._onAddTodo}
                >
                    Add
                </Button>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps, actions)(AddTodoView);
