import { Container } from "@mui/material";
import React from "react";
import './page.css';

const About = () => {
    
    return(
        <div className="main-content">
            <div className="top-content">
                <p className="background-text">
                “BRINGING INDONESIA’S FINEST COCONUT PRODUCTS TO THE WORLD”
                </p>   
            </div>
            <div className="bottom-content">
                <Container sx={{
                    width: { xs: '80%', sm: '80%', md: '72%'},
                    padding: '0 0 80px 0',
                }}>
                    <p style={{fontSize: '1.5rem'}}>
                        Cocodity Indo is a company that was founded in 2017 and is domiciled in West Java, Indonesia. 
                        We are engaged in supplying coconut products and their derivatives to local and international 
                        markets. Starting from the desire to promote local products, we chose to focus on coconut and 
                        its derivatives for trading. Our products have been widely used and become the best choice for 
                        the Indonesian market. We are committed to providing our customers with the best coconut products 
                        from local Indonesian farmers.
                    </p>
                </Container>
                
                <Container maxWidth="lg"sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'column',md: 'row'},
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    marginTop: {xs: '40px',sm: '40px', md: '0'}
                }}>
                    <div className="column">
                        <Container maxWidth="sm">
                            <h2>Vision</h2>
                            <Container maxWidth="md"sx={{
                                marginTop: '20px',
                                paddingBottom: {xs: '40px', sm: '20px', md: '0' },
                            }}>
                                <p>
                                    Our goal is to be a sustainable company, to prosper, and increase the value of Indonesian 
                                    farmers with agricultural products by bringing products from our best local coconut 
                                    derivatives to the international market.
                                </p>
                            </Container>
                        </Container>
                    </div>
                    <div className="column">
                        <Container maxWidth="sm">
                            <h2>Mission</h2>
                            <Container maxWidth="md" sx={{
                                marginTop: '20px',
                            }}>
                                <p className="mission-point">
                                    Providing the best local coconut derivative products to buyers at the best prices.
                                </p>
                                <p className="mission-point">
                                    Help increases the value of prices for local farmers for their prosperity by promoting their 
                                    products to the international market.
                                </p>
                                <p className="mission-point">
                                    Help provide education for local farmers to be more sustainable for the future.
                                </p>
                            </Container>
                        </Container>
                        
                        
                    </div>
                    
                </Container>             
            </div>
            
        </div>
    );
}


export default About;