import React from 'react'
import {Col,Card,Button} from 'react-bootstrap'
import one from '../../assets/image/1.jpg'
import { withRouter } from "react-router"
import './NewsCards.css';

class NewsCards extends React.Component{
    goToCarddetails = (newsId) => {
        localStorage.setItem("selectedCard", newsId);
        this.props.history.push('/news-details');
    }
    myFunction =(text)=> { 
        var res = text.substring(0, 80);
        return res;
    }
    render(){
        var news = "ဥပဒေပညာ စိတ်ဝင်စားသူတိုင်းကို ဖိတ်ခေါ်ပါရစေ။ Phoe Phyu School of Law ဆိုတာ ကုန်သွယ်ရေးနှင့် စီးပွားရေးဥပဒေပညာကို နိုင်ငံတကာလူ့အခွင့်အရေး စံချိန်၊ စံညွှန်းတွေနဲ့ ယှဉ်ထိုးတွဲဖက် လေ့လာသင်ကြားနိုင်အောင် ဖွင့်လှစ်လိုက်တဲ့ ဥပဒေပညာသင်ကျောင်း (School of Law) ဖြစ်ပါတယ်။ Phoe Phyu School of Law ဆိုတဲ့ ဥပဒေပညာသင်ကျောင်းဟာ သြစတေးလျအစိုးရထံမှာ မှတ်ပုံတင်ထားတဲ့ IQY Technology Degree College ရဲ့ ဥပဒေပညာဌာနအဖြစ် ပူးပေါင်းပြီး မဟာဥပဒေဘွဲ့သင်တန်းကို ပူးပေါင်းသင်ကြားမှာဖြစ်ပါတယ်။ မဟာဥပဒေဘွဲ့ရဲ့နိုင်ငံတကာအဆင့်အတန်းကတော့  အမေရိကန်နိုင်ငံရှိ  William Wilberforce အပြည်ပြည်ဆိုင်ရာ လူ့အခွင့်အရေး ဥပဒေစင်တာနှင့် ဆွစ်ဇာလန် အပါအဝင် နိုင်ငံအသီးသီးရှိ အစိုးရများထံတွင် မှတ်ပုံတင်ထားပြီး တရားဝင်ဘွဲ့အပ်နှင်းခွင့်ရှိသော စိန့်ကလီးမန့် တက္ကသိုလ် (St.Clements University) တို့က မဟာဥပဒေဘွဲ့ကို  ပူးတွဲချီးမြှင့်မှာဖြစ်ပါတယ်။ ကျောင်းရဲ့ထူးခြားချက်ကတော့ ဥပဒေပညာသင်ကျောင်းများဆိုင်ရာ နိုင်ငံတကာအဖွဲ့အစည်း (International Association of Law Schools) ရဲ့ အသိအမှတ်ပြုခြင်းခံရတဲ့ မြန်မာနိုင်ငံရဲ့ပထမဆုံးသော နိုင်ငံတကာအသိမှတ်ပြု ဥပဒေပညာသင်ကျောင်းလည်း ဖြစ်ပါတယ်။ Master of Law (LL.M) programs တွေကတော့ ✔ Executive LL M in International Trade Law and Human Rights Legal Practice (အပြည်ပြည်ဆိုင်ရာ ကုန်သွယ်မှုဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in International Commercial Law and Human Rights Legal Practice (အပြည်ပြည်ဆိုင်ရာ ကူးသန်းရောင်းဝယ်ရေးဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in International Business Law and Human Rights Legal Practice (နိုင်ငံတကာစီးပွားရေးဥပဒေနှင့် လူအခွင့်အရေးကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ Executive LL.M in Real Estate Law and Human Rights Legal Practice (အိမ်ခြံမြေဥပဒေနှင့် လူ့အခွင့်အရေး ဥပဒေကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှု မဟာဥပဒေဘွဲ့) ✔ Executive LL.M in Strategic Litigation Management and Court Practice (မဟာဗျူဟာမြောက် တရားစွဲဆိုခြင်း စီမံခန့်ခွဲမှုနှင့် တရားရုံးကျင့်စဉ်ဆိုင်ရာ စီမံခန့်ခွဲမှုမဟာဥပဒေဘွဲ့) ✔ LL.M in Constitutional and Administrative Law ဖွဲ့စည်းပုံအခြေခံဥပဒေနှင့် စီမံခန့်ခွဲရေး ဥပဒေဆိုင်ရာ မဟာဥပဒေဘွဲ့ ✔ LL.M in Legislative Drafting ဥပဒေမူကြမ်းရေးဆွဲရေးဆိုင်ရာမဟာဥပဒေဘွဲ့ တို့ပဲဖြစ်ပါတယ်။"
        return(
            <Col className="col" xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={one} className="img" />
                    <Card.Body>
                        <Card.Title>ဥပဒေပညာ စိတ်ဝင်စားသူတိုင်းကို ဖိတ်ခေါ်ပါရစေ။</Card.Title>
                        <Card.Text>
                            {this.myFunction(news)} ...  
                        </Card.Text>
                        <Button variant="primary" onClick = {()=>this.goToCarddetails('newsId1')}>Details...</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default withRouter(NewsCards)