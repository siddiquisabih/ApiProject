import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import axios from "axios"





class AllData extends Component {

    static navigationOptions = {
        title: 'ALL DATA'
    }


    constructor() {
        super()
        this.state = {
            data: []
        }
    }



    componentWillMount() {
        this.getAllData()
    }

    deleteFun(id) {
        var api = 'http://pmp.cometocode.com/MyApp/Delete_Project'
        console.log('delete', id)
        var data = {
            id: id
        }
        axios.post(`${api}`, data)
            .then((res) => {
                this.getAllData()
            })
    }



    getAllData() {
        let api = 'http://pmp.cometocode.com/MyApp/GetProjects'
        axios.get(`${api}`)
            .then((res) => {
                this.state.data = []
                this.setState({
                    data: res.data.Result
                })
                console.log(this.state.data)
            })
    }



    render() {
        return (
            <View>
                {
                    this.state.data.map((m, v) => {
                        return (
                            <View key={v}>
                                <Text></Text>
                                <Text> project ID = {m.ProjectID}</Text>
                                <Text> project Name = {m.ProjectName}</Text>
                                <Text> project Status = {m.ProjectStatus}</Text>
                                <Text> project Description = {m.ProjectDescription}</Text>
                                <Text> project Nature = {m.ProjectNature}</Text>
                                <Text></Text>
                                <Text></Text>
                                <Button title='Delete Record' onPress={this.deleteFun.bind(this, m.ProjectID)}></Button>
                                <Text></Text>
                                <Text></Text>
                                <Button title='Edit Record' onPress={() => { this.props.navigation.navigate('EditDataRoute' , {data : m}) }}></Button>

                            </View>
                        )

                    })
                }
            </View>
        );
    }
}

export default AllData