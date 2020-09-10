import React from 'react';
import {Container,Row} from 'react-bootstrap';
import NewsCards from '../../components/NewsCards/NewsCards.js';
import news from '../../assets/image/news.jpg';
import styled from 'styled-components';

const Styles = styled.div`
// .news-sec1{
//     background-image: url(${news});
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     height: 550px;
//     text-align: center;
//     position: relative;
// }
/* .news-sec1::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 550px;
    left: 0;
    top: 0;
    background-color: #333333;
    opacity: 0.4;
} */
.news-sec1-text{
    position: relative;
    text-align: center;
    font-weight: bolder;
    color: black;
}
.news-sec1-text h1{
    padding-top: 250px;
}
.news-sec1-text p a{
    color: black;
}
.news-sec2{
    padding-top: 50px;
    padding-bottom: 30px;
}

`;

export default class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {news:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
        <Styles>
            <div>
                {/* <div className="news-sec1">
                    <div className="news-sec1-text">
                        <h1>News</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/news">News</a></p>
                    </div>
                </div> */}
                <div className="news-sec2">
                    <Container>
                        <Row>                          
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>                            
                        </Row>
                    </Container>
                </div>
            </div>
        </Styles>   
        )
    }
}

