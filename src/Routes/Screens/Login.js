import React, { Component } from 'react';
//import { navigator } from "react-native-navigation";
import { connect } from 'react-redux';
import axios from 'axios';
import {
	StyleSheet,
	Image,
	Modal,
	TouchableHighlight,
	View,
	Alert,
	StatusBar,
	TextInput,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { saveUserName, saveUserDetail } from '../../Store/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Right,
	Body,
	Text,
	Form,
	Item,
	Input,
	Label
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './Logo';

class Login extends Component {
	static navigationOptions = {
		header: null
	};
	state = {
		name: '',
		password: ''
	};
	createAccountHandler = () => {
		//  this.props.navigator.push({
		//    screen: "awesome-places.Signup",
		//    title: "Signup"
		//  });
		this.props.navigation.navigate('SignUp');
	};

	PostData = async () => {
		var x = this.state.name;
		var y = this.state.password;
		axios
			.post('http://192.168.140.2:8000/getuser', {
				name: x,
				password: y
			})
			.then(async (Response) => {
				var check = Response.data;

				//console.log(Response.data);

				console.log(check);

				var fn;
				//       var dude = check.split(" ");
				//       var token=dude[1];
				//            var  fname=dude[0];
				//          var arrays=dude[2];
				var key;
				//   console.log(arrays);

				//          console.log(typeof fname);

				//         console. log(fname[0])

				//      const obj = JSON.parse(fname);

				//         fn=obj[0].firstName; //foo
				//obj['b'] //bar

				//     fn=fname["firstName"];
				// for (key in fname) {
				//      if (fname.hasOwnProperty(key)) {
				//         console.log(key + " = " + fname[key]);
				//     }
				//   }

				//        console.log(" First name is " + fn);

				if (typeof check === 'string') {
					this.setState({ msg: "don't" });
					alert('Wrong Password');
				} else {
					//         debugger;
					//            this.props.navigation.navigate('Dashboard');

					//redux sa conncet           this.props.OnLogin();
					//idk                setAuthorizationToken(token);
					//                  this.setState({msg:check});
					//                   this.setState({open:true});
					//        this.render("http://localhost3000/");
					//        this.Component(mainPage);

					//  AsyncStorage.setItem('jwtToken',token);

					await AsyncStorage.setItem('fullName', x);

					var full_name = await AsyncStorage.getItem('fullName');
					this.props.onLoginClick(full_name);

					//       trying to get user data
					//        var c= JSON.stringify(check)
					//        console.log("C DATA");

					//    console.log(c);

					this.props.onLoginDetail(check);

					// var full_name = AsyncStorage.getItem('fullName');
					//  store.dispatch({type:'FULL_NAME',name:x});
					// this.props.onLoginClick(full_name);

					this.props.navigation.navigate('Dashboard');
				}
			})
			.catch((error) => {
				console.log(error.data);
			});
	};
	render() {
		// console.log('login props')
		//  console.log(this.props)
		return (
			<Container style={styles.container}>
				<ImageBackground
					source={require('../../../images/phoneimg1.jpg')}
					style={{ width: '100%', height: '100%' }}
				>
					<Content>
						<StatusBar backgroundColor="black" barStyle="light-content" />
						<Logo />
						<View style={styles.container1}>
							<TextInput
								style={styles.inputBox}
								underlineColorAndroid="rgba(0,0,0,0)"
								placeholder="Email"
								placeholderTextColor="rgb(179, 0, 0)"
								selectionColor="#fff"
								keyboardType="email-address"
								onChangeText={(inp) => this.setState({ name: inp })}
							/>
							<TextInput
								style={styles.inputBox}
								underlineColorAndroid="rgba(0,0,0,0)"
								placeholder="Password"
								secureTextEntry={true}
								placeholderTextColor="rgb(179, 0, 0)"
								onChangeText={(inp) => this.setState({ password: inp })}
							/>

							<TouchableOpacity style={styles.button} onPress={this.PostData}>
								<Text style={styles.buttonText}>Login</Text>
							</TouchableOpacity>
						</View>
						<View>
							{/* 
          <Text>
          {this.state.name}
          {this.state.password}
          </Text>

  */}
						</View>

						<View style={styles.signupTextCont}>
							<Text style={styles.signupText}>Don't have an account yet?</Text>
							<TouchableOpacity
								onPress={() => {
									this.props.navigation.navigate('SignUp');
								}}
							>
								<Text style={styles.signupButton}> Signup</Text>
							</TouchableOpacity>
						</View>
					</Content>
				</ImageBackground>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor:'#455a64',
		flex: 1,
		alignItems: 'center'
		//paddingTop:'10%'
	},
	signupTextCont: {
		flexGrow: 1,
		justifyContent: 'center',
		paddingVertical: '10%',
		flexDirection: 'row',
		alignItems: 'center'
		//marginLeft:'35%'
	},
	signupText: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 16
	},
	signupButton: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500'
	},
	container1: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 50
	},

	inputBox: {
		width: 300,
		backgroundColor: 'rgba(255, 255,255,0.4)',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 10
	},
	button: {
		width: 300,
		backgroundColor: 'rgba(179, 0, 0,0.5)',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	}
});

const mapStateToProps = (state) => {
	return {
		userName: state.Main.userName
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onLoginClick: (x) => dispatch(saveUserName(x)),
		onLoginDetail: (y) => dispatch(saveUserDetail(y))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//connect(mapStateToProps,mapDispatchToProps)
