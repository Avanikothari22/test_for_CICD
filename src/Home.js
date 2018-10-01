import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { receiveUserData1, receiveAccData1, } from './actions';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userResults: this.props.data1,
            accResults: this.props.data2,
            showData1: false,
            showData2: false
        }
    }
    componentDidMount() {
        //this.props.receiveUserData1();
        // this.props.receiveAccData1();
    }
    componentWillReceiveProps(nextProps) {
        console.log('data2:::', nextProps.data2);
        this.setState({
            userResults: nextProps.data1.length > 0 ? nextProps.data1 : [],
            accResults: nextProps.data2.length > 0 ? nextProps.data2 : [],
        })
    }
    render() {
        const data = this.state.userResults;
        console.log('data::::', this.state.accResults[0]);

            return (
                <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'grey', margin: 50, padding: 20 }} onPress={() => this.setState({ showData1: !this.state.showData1 }, () => this.props.receiveUserData1())}> <Text> click me </Text></TouchableOpacity>
                    {this.state.showData1 && this.state.userResults.length > 0 ?
                        <View>
                            <Text> Gender: {this.state.userResults[0].gender} </Text>
                            <Text> Name : {this.state.userResults[0].name ? this.state.userResults[0].name.first : null} {this.state.userResults[0].name ? this.state.userResults[0].name.last : null} </Text>
                            <Text> Email: {this.state.userResults[0].email} </Text>
                        </View> : null
                    }
                    <TouchableOpacity style={{ backgroundColor: 'grey', margin: 50, padding: 20 }} onPress={() => this.setState({ showData2: !this.state.showData2 }, () => this.props.receiveAccData1())}> <Text> click me </Text></TouchableOpacity>
                    {this.state.showData2 && this.state.accResults.length > 0 ?
                        <View>
                            <Text style={{ paddingTop: 20 }}> Gender: {this.state.accResults[0].gender} </Text>
                            <Text> Name : {this.state.accResults[0].name ? this.state.accResults[0].name.first : null} {this.state.accResults[0].name ? this.state.accResults[0].name.last : null} </Text>
                            <Text> Email: {this.state.accResults[0].email} </Text>
                        </View> : null
                    }
                </View>
            );

    }
}
const mapStateToProps = state => ({ data1: state.data.data1, data2: state.data.data2 });
const mapDispatchToprops = dispatch => bindActionCreators({ receiveUserData1, receiveAccData1, }, dispatch);
export default connect(mapStateToProps, mapDispatchToprops)(Home);