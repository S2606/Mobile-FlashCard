import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/deck';
import { addCardToDeckUtil } from '../utils/storageAPI';

/**
 * Component which allows addition of card
 * in a deck
 */

export class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };
  handleQuestionChange = question => {
    this.setState({ question });
  };
  handleAnswerChange = answer => {
    this.setState({ answer });
  };
  handleSubmit = () => {
    const { addCardToDeck, title, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    addCardToDeck(title, card);
    addCardToDeckUtil(title, card);

    this.setState({ question: '', answer: '' });
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>Add a question</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={this.state.question}
              onChangeText={this.handleQuestionChange}
              placeholder="Question"
              autoFocus={true}
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={this.state.answer}
              onChangeText={this.handleAnswerChange}
              placeholder="Answer"
              ref={input => {
                this.answerTextInput = input;
              }}
              returnKeyType="done"
              onSubmitEditing={this.handleSubmit}
            />
          </View>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <TouchableOpacity
                btnStyle={{ backgroundColor: '#008ae6', borderColor: '#fff' }}
                onPress={this.handleSubmit}
                disabled={this.state.question === '' || this.state.answer === ''}
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: '30%' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#dfdfdf',
    justifyContent: 'space-around'
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');

  return {
    title
  };
};

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddCard);

