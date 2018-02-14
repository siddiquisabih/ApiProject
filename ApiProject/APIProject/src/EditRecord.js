import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import axios from "axios"



class EditData extends Component {


    static navigationOptions = {
        title: 'EDIT DATA'
    }


    constructor() {
        super()

        this.state = {
            projectStatus: 0,
            description: '',
            nature: '',
            proId: 0,
            proName: '',

        }
    }




    saveTask() {

        let api = 'http://pmp.cometocode.com/MyApp/Get_Project_ByID/'

        var data = {
            ProjectID: this.state.proId,
            ProjectName: this.state.proName,
            ProjectDescription: this.state.description,
            ProjectNature: this.state.nature,
            ProjectStatus: this.state.projectStatus
        }

        axios.post(`${api}`, data)
            .then((res) => {
                console.log(res)
                this.props.navigation.navigate('AllDataRoute')
            })


    }



    addData(s) {
        console.log(s)
        var api = 'http://pmp.cometocode.com/MyApp/ '

        var data = {
            ProjectID : this.state.proId,
            ProjectName : this.state.proName,
            ProjectDescription : this.state.description,
            ProjectNature : this.state.nature,
            ProjectStatus : this.state.projectStatus
        }
                axios.post(`${api}` , data)
                .then((res)=>{
                    console.log(res)
                    this.props.navigation.navigate('AllDataRoute')
                })

    }

    componentWillMount() {
        console.log(this.props.navigation.state.params.data)

        this.setState({

            projectStatus: this.props.navigation.state.params.data.ProjectStatus,
            description: this.props.navigation.state.params.data.ProjectDescription,
            nature: this.props.navigation.state.params.data.ProjectNature,
            proId: this.props.navigation.state.params.data.ProjectID,
            proName: this.props.navigation.state.params.data.ProjectName,
        })
    }



    render() {
        return (
            <View>
                <Text>Project Status</Text>
                <TextInput onChangeText={(text) => { this.setState({ projectStatus: text }) }} />
                <Text> project Description </Text>
                <TextInput value={this.state.description} onChangeText={(text) => { this.setState({ description: text }) }} />
                <Text> project Nature </Text>
                <TextInput value={this.state.nature} onChangeText={(text) => { this.setState({ nature: text }) }} />
                <Text>PROJECT ID</Text>
                <TextInput onChangeText={(text) => { this.setState({ proId: text }) }} />
                <Text>Project Name</Text>
                <TextInput value={this.state.proName} onChangeText={(text) => { this.setState({ proName: text }) }} />


                <Button title='Save edit data' onPress={this.saveTask.bind(this)} />
                <Text></Text>
                <Text></Text>

                <Button title='ADD New DATA ' onPress={this.addData.bind(this)} />
            </View>
        );
    }
}


export default EditData