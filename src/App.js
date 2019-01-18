    import React, { Component } from 'react';
    import MapsContainer from './components/Maps/MapsContainer/MapsContainer';
    import Card from './components/Card/Card';
    import ProcessImages from './containers/ProcessImages/ProcessImages';

    import axios from 'axios';

    import GOOGLE_API_KEY from './APIKeys';

    import './App.css';
    // import VisionAPI from './components/VisionAPI/VisionAPI';

    class App extends Component {

    state = {
        savedResponse: [
        {
            labelAnnotations: [
            {
                description: "wilderness",
                mid: "/m/023bbt",
                score: "0.94900167",
                topicality: "0.94900167"
            },
            {
                description: "wilderness",
                mid: "/m/023bbt",
                score: "0.94900167",
                topicality: "0.94900167"
            },
            {
                description: "wilderness",
                mid: "/m/023bbt",
                score: "0.94900167",
                topicality: "0.94900167"
            }
            ]
        }
        ],
        response: 0,
        error: 0,
        count: 0
    }

    doVisionAPICall = () => {

        let VisAPIInstance = axios.create({
        baseURL: 'https://vision.googleapis.com/v1/images:annotate?key=' + GOOGLE_API_KEY,
        'Access-Control-Allow-Origin': '*'
        });

        VisAPIInstance.post('',
        {
        "requests":[
            {
                "image":{
                "source":{
                    // "imageUri":"https://cnet4.cbsistatic.com/img/vwQOO7UpqbcbW_oOWiPfzzWc0Og=/970x0/2018/04/11/76a26a67-5570-4f3a-bacb-cba839c7df20/gettyimages-944480672.jpg"
                    // "imageUri": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    "imageUri": "https://storage.googleapis.com/wzukusers/user-32857987/images/5ac5a109356cdt9b4ccL/20170625_103422.jpg"
                }
                },
                "features":[
                {
                    "type":"LABEL_DETECTION",
                    "maxResults":10
                },
                {
                    "type":"FACE_DETECTION",
                    "maxResults":10
                },
                // {
                //   "type":"LANDMARK_DETECTION",
                //   "maxResults":10
                // },
                // {
                //   "type":"LOGO_DETECTION",
                //   "maxResults":10
                // },
                // {
                //   "type":"TEXT_DETECTION",
                //   "maxResults":10
                // },
                {
                    "type":"WEB_DETECTION",
                    "maxResults":10
                },
                // {
                //   "type":"OBJECT_LOCALIZATION",
                //   "maxResults":10
                // },
                // {
                //   "type":"IMAGE_PROPERTIES",
                //   "maxResults":10
                // }
                ]
            }
            ]
        })
        .then(response => {
            console.log(response);
            this.setState({response: response.data.responses});
            })
        .catch(error => {
            console.log(error);
            this.setState({error: error});
        });

    }

    componentWillMount() {

        this.doVisionAPICall();

    }

    componentDidMount() {

    }

    render() {
        let cards = <p>Loading...</p>;

        if(this.state.response !== 0)
        {
            cards =
                <div>
                    {this.state.response.map((annotations, index) => <Card data={annotations} key={index}></Card>)}
                    <ProcessImages data={this.state.response} />
                    {console.log("ProcessImages fired")}
                </div>
        }

        return (
        <div className="App">
            {/* <MapsContainer></MapsContainer> */}
            {cards}
        </div>
        );
    }
    }

    export default App;
