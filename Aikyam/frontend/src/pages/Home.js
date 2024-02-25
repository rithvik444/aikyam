import React from 'react'
import '../Style/HomeCss.css'
import Navbar from '../Components/Navbar';
import price from '../Images/best-price.png'
import educate from '../Images/education.png';
import compare from '../Images/prices.png';
import gift from '../Images/gift.png';
import aikyam from '../Images/aikyam.mp4';
import aikyamLogo from '../Images/AikyamIcon.png'
function Home() {
    return (

        <div className='Homecontainer'>
            <Navbar />
            <div className='home'>
                <div className='homecon transbox'>

                    <span>Welcome To Aikyam</span>
                    <p>In an effort to combat the growing issue of electronic waste (e-waste), our project is dedicated to responsible recycling and disposal. We provide convenient drop-off locations for old electronics, ensuring they are recycled or refurbished, reducing environmental impact and promoting a sustainable future.</p>
                    <div className='but'>
                        <button className='btn'>Start Recycling</button>
                        <button className='btn'>Locate Facility</button>
                    </div>
                </div>

            </div>

            <div className='about' id='about'>

                <div className='aboutconhead'>
                    <p>About Us</p>
                </div>
                <div className='list'>
                    <div className='price'>
                        <p className='group'>
                            <img src={price} />
                            <span>Price</span>
                        </p>
                        <p className='para'>Determine the value of your e-waste items effortlessly using our "Best Price" feature. By inputting item details, such as make and condition, you'll receive an accurate estimate before recycling. We take pride in offering competitive rates, ensuring you get the highest return for your electronics</p>
                    </div>
                    <div className='price'>
                        <p className='group'>
                            <img src={educate} />
                            <span>Educate</span>
                        </p>
                        <p className='para'>
                            Explore our extensive "Education" section to gain insights into responsible e-waste disposal. We provide comprehensive resources, including articles and guides, to help you understand the environmental impact of e-waste and the importance of recycling.
                        </p>
                    </div>
                    <div className='price'>
                        <p className='group'>
                            <img src={compare} />
                            <span>Price Comparison Tool</span>
                        </p>

                        <p className='para'>
                            Make well-informed recycling decisions with our "Price Comparison Tool." Easily compare our competitive recycling rates with local competitors to ensure transparency and select the most financially advantageous recycling option.
                        </p>
                    </div>
                    <div className='price'>
                        <p className='group'>
                            <img src={gift} />
                            <span>Rewards</span>
                        </p>

                        <p className='para'>
                            Participate in our "Rewards" program and earn points, bonuses, and rewards with every recycling effort. These rewards can be redeemed for valuable items, discounts, or gift cards, offering tangible benefits for your eco-friendly actions.
                        </p>
                    </div>
                </div>
            </div>


            <div className='viedo' id='viedo'>
                <div className='aboutconhead'>
                    <p>How It Actually Works</p>
                </div>
                <div className='viedocon'>
                    <p>
                        Welcome to our e-waste recycling platform! Users can log in to purchase eco-friendly products for recycling or locate the nearest facility for drop-off. Through product purchases, users earn reward points, incentivizing sustainable behavior. Our facility locator makes recycling convenient; users can find the nearest drop-off point with ease. Each drop-off contributes to environmental preservation and earns users additional rewards. We're dedicated to promoting sustainability and empowering individuals to make a positive impact. Join us in creating a greener future, one recycled product at a time!
                    </p>
                    <video src={aikyam} autoPlay muted></video>



                </div>








            </div>
            <footer>

                <div className='fot'>
                    <img src={aikyamLogo} alt='aikyam' width={'70px'} />
                    <p>Aikyam</p>


                </div>
                <div className='link'>
                    <a href='/contact'>Contact Team Menbers</a>
                </div>
                <p className='foot'>Created By <span>Aikyam</span> Team
                    <p className='slogan'>Recycle Electronics, Renew Tomorrow!</p>
                </p>
            </footer>


        </div>

    )
}

export default Home