import React from 'react';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';
import CardsContainer from '../CardsContainer';
import NewCards from '../NewCards';
import "./css/Home.css";
const cards_content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt porro nobis fugit cum ex aperiam ipsa vel molestiae accusamus magni, error obcaecati, soluta sint dolorem repudiandae";
const cards_heading = "This is";
const Home = () => {
    return (
        <>
        <section className="hero_section">
                <div className="image_container"></div>
                <div className="conataner_first">
                    <h2>Welcome To Our Website</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, libero impedit officiis maxime ullam rem dolorum explicabo laudantium ducimus fuga tempora odit doloribus! Possimus perferendis distinctio expedita quod ut fugit nam tempora, accusantium magnam! Minima deleniti tempora libero vel soluta expedita adipisci, provident illo porro magni quis repellendus quidem repudiandae.</p>
                    <div className="btn_container">
                        <NavLink to='./about' className="Hero_Button">About Us</NavLink>
                        <NavLink to="./contact" className="Hero_Button">Contact Us</NavLink>
                    </div>
                </div>
        </section>

        {/* section 2 */}

        <section className="section_second">
            <div className="TopData">
                <h3>Taking Your Business To The Next Level</h3>
                <p>Get Powerful Things</p>
                <a href="#">Servies</a>
                <hr />
            </div>
            <div className="new_content">
                <NewCards src='https://cdn.pixabay.com/photo/2016/04/25/14/15/man-1352025_960_720.png' heading={`${cards_heading} first`} content={cards_content}/>
                <NewCards src='https://cdn.pixabay.com/photo/2016/04/25/14/15/man-1352025_960_720.png' heading={`${cards_heading} second`} content={cards_content}/>
                <NewCards src='https://cdn.pixabay.com/photo/2016/04/25/14/15/man-1352025_960_720.png' heading={`${cards_heading} third`} content={cards_content}/>
            </div>
        </section>
        <section className="new_container">
            <div className="inner_container">
                <div className="container_header">
                    <h3>Subscribe To Latest Content !</h3>
                </div>
                <div className="container_inner_content">
                    <input type="email" placeholder='Enter Mail To Subscribe!'/>
                    <a href="#">SUBSCRIBE</a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;
