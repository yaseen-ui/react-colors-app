import React from 'react';


class ColorChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: {}
        }
    }

    componentDidMount() {
        const api = 'https://raw.githubusercontent.com/jonathantneal/color-names/master/color-names.json';
        fetch(api, { method: 'GET' }).then(res => res.json()).then(
            (result) => {
                this.setState({ colors: result }, () => console.log(this.state.colors));
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        const dom = Object.keys(this.state.colors).map(
            (ele, i) => <div key={i} onClick={(e) => this.sendColorToParent(ele)} className='colors-tile' style={{ backgroundColor: ele }}> <span>{this.state.colors[ele]}</span></div>
        )
        return dom;
    }

    sendColorToParent(color) {
        this.props.colorChanger(color);
    }

}

export default ColorChanger;