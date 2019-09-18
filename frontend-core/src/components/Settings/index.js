import React from "react";
import { Button, Form, Segment, Container, Dropdown, Label } from 'semantic-ui-react'
import "../Init/init.css";
import ReactDOM from 'react-dom';

class Settings extends React.Component {
    state = {
        default_settings: {},
        tmp_settings: {}
    }

    constructor(props) {
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    callAPI() {
        fetch("http://localhost:3001/settings")
            .then(res => res.json())
            .then(res => {
                this.setState({ 
                    default_settings: res.default,
                    tmp_settings: res.tmp
                })
              })
            
    }
    
    componentDidMount() {
        this.callAPI();
    }

    handleSubmitClick() {
        console.log('submit click')
        fetch("http://localhost:3001/settings",{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                default: this.state.default_settings,
                tmp: this.state.tmp_settings
            }),
        });
    }

    renderInputField() {
        return (
            Object.keys(this.state.default_settings).map( (key, i) => {
                switch (key) {
                    case 'format':
                        return [(
                            <Form.Dropdown
                            label='Image formats'
                            placeholder='Image formats'
                            fluid
                            multiple
                            search
                            selection
                            options={this.state.default_settings[key].image.map(i=> {return {value:i,text:i,key:i}})}
                            defaultValue={this.state.default_settings[key].image}
                            icon={null}
                            key={'image'+i}
                          />),(
                            <Form.Dropdown
                            label='Video formats'
                            placeholder='Video formats'
                            fluid
                            multiple
                            search
                            selection
                            options={this.state.default_settings[key].video.map(i=> {return {value:i,text:i,key:i}})}
                            defaultValue={this.state.default_settings[key].video}
                            icon={null}
                            key={'video'+i}
                          />)]
                    default:
                        return (<Form.Input
                            fluid
                            label={key}
                            placeholder={key}
                            key={i}
                            value={this.state.default_settings[key]}
                        />)
                }
            })
        )
    }

    render() {
        return (
            <Container>
                <Segment>
                    <Form>
                        {this.renderInputField()}
                        <Button type='submit' onClick={this.handleSubmitClick}>Submit</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}

export default Settings;