import React, {Component} from 'react';
import axios from "axios";

class Send extends Component {

    sendAjax = () => {
        /* axios.get("http://localhost:8080/hello", {
             params: {
                 name: 'react'
             }
         }).then((response) => {
            alert(response.data)
         }).catch((error) => {
             console.log(error)
         })*/

        /*axios.post("http://localhost:8080/hello", {
            name: 'react'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            alert(response.data)
        }).catch((error) => {
            console.log(error)
        })*/

        axios.all([this.sendHelloReq(), this.sendGetNameReq()]).then(axios.spread((res1, res2) => {
            console.log(res1, res2);
        }))

    }

    getRemoteImg = () => {
        // 获取远端图片
        axios({
            method: 'get',
            url: 'https://img2.baidu.com/it/u=1337068678,3064275007&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
            responseType: 'stream'
        }).then(function (response) {
            console.log(response.data)
        });
    }

    sendHelloReq() {
        axios.get("http://localhost:8080/hello", {
            params: {
                name: 'react'
            }
        }).then((response) => {
            console.log(response, "sendHelloReq")
        }).catch((error) => {
            console.log(error)
        })
        return 'sendHelloReq'
    }

    sendGetNameReq() {
        axios.get("http://localhost:8080/getName", {}).then((response) => {
            console.log(response, "sendGetNameReq")
        }).catch((error) => {
            console.log(error)
        })
        return 'sendGetNameReq'
    }

    createInstance = () => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            timeout: 5000,
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        instance.interceptors.request.use(config => {
            return config;
        })
        instance.get("getName").then(response => {
            console.log(response)
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.sendAjax}>发送ajax请求</button>
                <button onClick={this.getRemoteImg}>获取图片</button>
                <button onClick={this.createInstance}>axios(createInstance)</button>
            </div>
        );
    }
}

export default Send;