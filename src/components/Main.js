import "./main.css";
import Illustration from '../images/illustration-mockups.svg';

function Main() {
    return (
        <main className="main">
            <img className="illustration main__illustration" src={Illustration} alt="illustration"></img>
            <div className="register">
                <h1 className="title register__title">Build The Community Your Fans Will Love</h1>
                <p className="paragraph register__paragraph">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                Create connections with your users as you engage in genuine discussion. </p>
                <button className="button register__button">Register</button>
            </div>
        </main>
    );
}

export default Main;
