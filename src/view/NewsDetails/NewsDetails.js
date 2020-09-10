import React from 'react';
import one from '../../assets/image/1.jpg';
import {Container,Row,Col} from 'react-bootstrap';
//import NewsDetailsCommentForm from '../NewsDetailsCommentForm/NewsDetailsCommentForm';
import styled from 'styled-components';

const Styles = styled.div`

// .news-details-sec1{
//     background-image: url(../../assets/image/news.jpg);
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     height: 550px;
//     text-align: center;
//     position: relative;
// }
/* .news-details-sec1::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 550px;
    left: 0;
    top: 0;
    background-color: #333333;
    opacity: 0.4;
} */

// .news-details-sec1-text{
//     position: relative;
//     text-align: center;
//     font-weight: bolder;
//     color: black;
// }
// .news-details-sec1-text h1{
//     padding-top: 250px;
// }
// .news-details-sec1-text p a{
//     color: black;
// }

.news-details-sec2{
    padding-top: 50px;
    padding-bottom: 50px;
}
.details-img{
    width: 100%;
    height: 400px;
    object-fit: cover;
}
/* .form{
    width:400px;
    padding-left:50px;
}
.head{
    padding-bottom: 20px;
} */
`;

export default class NewsDetails extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {news:[]}
    }
    componentDidMount(){
        
    }
    render() {
        let selectedCardId = localStorage.getItem("selectedCard");       
        return ( 
        <Styles>
            <div>
                {/* <div className="news-details-sec1">
                    <div className="news-details-sec1-text">
                        <h1>News Details ({selectedCardId})</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/news-details">News Details</a></p>
                    </div>
                </div> */}
                <div className="news-details-sec2">
                    <Container>
                        <Row>
                            <Col xs={1} md={1}></Col>
                            <Col xs={10} md={10}>
                                <div>
                                    <img src={one} alt="details-img" className="details-img"/><br/><br/><br/>
                                    <h3>ဥပဒေပညာ စိတ်ဝင်စားသူတိုင်းကို ဖိတ်ခေါ်ပါရစေ။</h3><br/>
                                    <p>ဥပဒေပညာ စိတ်ဝင်စားသူတိုင်းကို ဖိတ်ခေါ်ပါရစေ။ Phoe Phyu School of Law ဆိုတာ ကုန်သွယ်ရေးနှင့် စီးပွားရေးဥပဒေပညာကို နိုင်ငံတကာလူ့အခွင့်အရေး စံချိန်၊ စံညွှန်းတွေနဲ့ ယှဉ်ထိုးတွဲဖက် လေ့လာသင်ကြားနိုင်အောင် ဖွင့်လှစ်လိုက်တဲ့ ဥပဒေပညာသင်ကျောင်း (School of Law) ဖြစ်ပါတယ်။ Phoe Phyu School of Law ဆိုတဲ့ ဥပဒေပညာသင်ကျောင်းဟာ သြစတေးလျအစိုးရထံမှာ မှတ်ပုံတင်ထားတဲ့ IQY Technology Degree College ရဲ့ ဥပဒေပညာဌာနအဖြစ် ပူးပေါင်းပြီး မဟာဥပဒေဘွဲ့သင်တန်းကို ပူးပေါင်းသင်ကြားမှာဖြစ်ပါတယ်။ မဟာဥပဒေဘွဲ့ရဲ့နိုင်ငံတကာအဆင့်အတန်းကတော့  အမေရိကန်နိုင်ငံရှိ  William Wilberforce အပြည်ပြည်ဆိုင်ရာ လူ့အခွင့်အရေး ဥပဒေစင်တာနှင့် ဆွစ်ဇာလန် အပါအဝင် နိုင်ငံအသီးသီးရှိ အစိုးရများထံတွင် မှတ်ပုံတင်ထားပြီး တရားဝင်ဘွဲ့အပ်နှင်းခွင့်ရှိသော စိန့်ကလီးမန့် တက္ကသိုလ် (St.Clements University) တို့က မဟာဥပဒေဘွဲ့ကို  ပူးတွဲချီးမြှင့်မှာဖြစ်ပါတယ်။ ကျောင်းရဲ့ထူးခြားချက်ကတော့ ဥပဒေပညာသင်ကျောင်းများဆိုင်ရာ နိုင်ငံတကာအဖွဲ့အစည်း (International Association of Law Schools) ရဲ့ အသိအမှတ်ပြုခြင်းခံရတဲ့ မြန်မာနိုင်ငံရဲ့ပထမဆုံးသော နိုင်ငံတကာအသိမှတ်ပြု ဥပဒေပညာသင်ကျောင်းလည်း ဖြစ်ပါတယ်။ Master of Law (LL.M) programs တွေကတော့ ✔ Executive LL M in International Trade Law and Human Rights Legal Practice (အပြည်ပြည်ဆိုင်ရာ ကုန်သွယ်မှုဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in International Commercial Law and Human Rights Legal Practice (အပြည်ပြည်ဆိုင်ရာ ကူးသန်းရောင်းဝယ်ရေးဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in International Business Law and Human Rights Legal Practice (နိုင်ငံတကာစီးပွားရေးဥပဒေနှင့် လူအခွင့်အရေးကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in Real Estate Law and Human Rights Legal Practice (အိမ်ခြံမြေဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှု မဟာဥပဒေဘွဲ့) ✔ Executive LL.M in Strategic Litigation Management and Court Practice (မဟာဗျူဟာမြောက် တရားစွဲဆိုခြင်း စီမံခန့်ခွဲမှုနှင့် တရားရုံးကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ LL.M in Constitutional and Administrative Law ဖွဲ့စည်းပုံအခြေခံဥပဒေနှင့် စီမံခန့်ခွဲရေး ဥပဒေဆိုင်ရာ မဟာဥပဒေဘွဲ့ ✔ LL.M in Legislative Drafting ဥပဒေမူကြမ်းရေးဆွဲရေးဆိုင်ရာမဟာဥပဒေဘွဲ့ တို့ပဲဖြစ်ပါတယ်။</p><br/>
                                    <a href="/news" className="btn btn-primary">Back</a>
                                </div>
                            </Col>
                            <Col xs={1} md={1}></Col>
                        </Row>
                    </Container>     
                    {/* <div className="form">
                        <div>
                            <h3 className="head">Drop Your Comment</h3>
                            <NewsDetailsCommentForm/>
                        </div>
                    </div> */}
                </div>
            </div>
        </Styles>
        )
    }
}