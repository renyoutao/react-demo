import React, {Component} from 'react';

class Life extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    btnClick = () => {
        let {count} = this.state;
        count = count + 1
        this.setState({
            count
        })
    }

    btnUnMountClick = () => {
        console.log('btnUnMountClick')
    }

    componentDidMount() {
        //组件挂载完成的回调钩子函数
        console.log('componentDidMount')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }


    render() {
        return (
            <div>
                <button onClick={this.btnClick}>click #{this.state.count} times</button>
                <br/>
                <button onClick={this.btnUnMountClick}>移除组件</button>
            </div>
        );
    }
}

export default Life;