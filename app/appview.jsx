const React = require("react");
const connect = require("react-redux").connect;
const actions = require("./actions.jsx");

class IkbLogo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <div class="container d-none d-lg-block text-center">
      <br></br>
      <img width={450} src="./public/KBSP colour white.svg"></img>
      <br></br><br></br><br></br>
    </div>
  }
}

class OfficialLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <div class="container">
      Больше информации на <a class="navbar-brand under" target="_blank" href="https://www.mirea.ru/education/the-institutes-and-faculties/institut-kiberbezopasnosti-i-tsifrovykh-tekhnologiy/training-programs/spetsialitet/10-05-04-information-analytical-system-security/?ysclid=lrmlsb46vw605343380">официальном сайте РТУ МИРЭА</a>      
    </div>
  }
}

class FAQ_Component extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <div id="ques" class="container ">
    <div class="row row-cols-1">
      <div class="col">❔Какой проходной балл был в 2023?</div>
      <div class="col">💡240</div>
    </div>
  </div>
  }
}  

class Carousel1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <div id="foto" class="container text-center">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./public/343.jpeg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="./public/34_1.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="./public/32_1.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <footer class="footer mt-auto py-3 ">
        <div class="container text-center">
          <span>© 2024, Кафедра КБ-2 "Информационно-аналитические системы кибербезопасности"</span>
          <OfficialLink />
        </div>
      </footer>
  }
}

class BeginText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <div class="container text-center">
      <p>
      <br></br>
      <h1 id="test" class="display-5">
        Насколько вам подходит специальность 10.05.04 "Информационно-аналитические системы безопасности?"
      </h1>
      </p>
    </div>
  }
}

class NavbarReact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return <nav class="navbar ">
    <div class="container">
      <a class="navbar-brand" href="#">
      <img src="./public/yozh_white.svg" alt="Bootstrap" width="30" height="24"></img>
         
      </a>
      
    </div>
  </nav>
  }
}

class QuizForm extends React.Component {
  constructor(props) {
    super(props);
    this.question_id = 0
    this.count_questions = this.props.questions.length;
    this.state = {
    	isFirst: true
    }
  }
  resultCounter() {
    return (this.props.count_yes / this.count_questions) * 100
  }
  onClickYes() {
    this.props.addYes(this.props.count_yes)
    //console.log("надо +1 Да:", this.props.count_yes)
    this.question_id = this.question_id + 1
  }
  onClickNo() {
    this.props.addNo(this.props.count_no)
    this.question_id = this.question_id + 1
  }
  onClickAgain() {
    this.props.setYesZero(this.props.count_yes)
    this.props.setNoZero(this.props.count_no)
    this.question_id = 0

  }
  onClickFirst() {
    this.setState({isFirst: false})
  }
  render() {
    if (this.state.isFirst) {
     {
        return ( <div class="container text-center">
          <p>      
              <br></br>       
              <button type="button" class="btn btn-outline-light btn-lg sqbutt" onClick = {this.onClickFirst.bind(this)}>Пройдите тест</button> 
          </p>
      </div> ) 
      }
    }
    else if (this.props.count_yes + this.props.count_no >= this.count_questions)
    {
      return ( 
        <div class="container text-center">
        <p><h1 class="display-1">{this.resultCounter()}%</h1><br></br>
        
        <button type="button" class="btn btn-outline-light btn-lg" onClick = {this.onClickAgain.bind(this)}>Пройти тест снова</button> 
        </p>
      </div> 
    ) 
    }
    else
    {
      return ( <div class="container text-center">
                <div class="container">
                    <br></br>
                    <div class="row"><div class="col">  <p class="fs-5 font-monospace"><b>{this.props.questions[this.question_id]}</b></p>  </div></div>
                    <br></br>   
                    <div class="row">   
                      <div class="col"></div>       
                      <div class="col"><button type="button" class="btn btn-outline-light btn-lg" onClick = {this.onClickYes.bind(this)}> <span class="fs-5 font-monospace">Да</span> </button> </div>
                      <div class="col"><button type="button" class="btn btn-outline-light btn-lg" onClick = {this.onClickNo.bind(this)}> <span class="fs-5 font-monospace">Нет</span> </button> </div>
                      <div class="col"></div> 
                    </div> 
                    <div class="row"><br></br></div> 
                </div>
            </div> ) 
      }
  }
};
  
class AppView extends React.Component {
  
    render() {
        return <div>   
            <NavbarReact />
            <BeginText />
            <QuizForm {...this.props} />
            <IkbLogo/>
            
            
            <Footer />
    </div>
  }
};
  
function mapStateToProps(state) {
  return {
    count_yes: state.get("count_yes"),
    count_no: state.get("count_no"),
    questions: state.get("questions"),
  };
}
  
module.exports = connect(mapStateToProps, actions)(AppView);