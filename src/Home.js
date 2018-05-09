import  React, { Component } from 'react';
import  { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import { receiveUserData1,receiveAccData1, } from './actions';
class Home extends Component{
     constructor(props){
         super(props);
         this.state ={
             userResults : {},
             accResults : {},
         }
     }
     componentDidMount(){
         this.props.receiveUserData1();
         this.props.receiveAccData1();
     }
     componentWillReceiveProps(nextProps){
   // console.log('data2:::',nextProps.data2);
        this.setState({
            userResults: nextProps.data1.results ? nextProps.data1.results : [],
            accResults : nextProps.data2.results ? nextProps.data2.results : [],
        })
     }
     render(){
         const data = this.state.userResults;
        console.log('data::::',this.state.userResults[0]);
        if (this.state.userResults[0] && this.state.accResults[0] ){
            return(
                <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                   <Text> Gender: { this.state.userResults[0].gender } </Text>
                    <Text> Name : { this.state.userResults[0].name ? this.state.userResults[0].name.first :null } { this.state.userResults[0].name ? this.state.userResults[0].name.last : null } </Text>
                    <Text> Email: { this.state.userResults[0].email } </Text>
                    <Text style={{paddingTop:20}}> Gender: { this.state.accResults[0].gender } </Text>
                    <Text> Name : { this.state.accResults[0].name ? this.state.accResults[0].name.first :null } { this.state.accResults[0].name ? this.state.accResults[0].name.last : null } </Text>
                    <Text> Email: { this.state.accResults[0].email } </Text>
        
                </View>
             );
        }else{
            return null
        }
         
     }
 }
  const mapStateToProps = state => ({ data1: state.data.data1, data2: state.data.data2 });
  const mapDispatchToprops = dispatch =>  bindActionCreators({ receiveUserData1, receiveAccData1, } , dispatch);
  export default connect(mapStateToProps,mapDispatchToprops)(Home);