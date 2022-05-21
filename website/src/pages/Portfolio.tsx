import { Link } from "react-router-dom";

import { motion } from "framer-motion";


export function Portfolio (){
    return (
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: 0 , transition:{ease: "easeOut", duration: 0.5} }}
        >
            <header>
                <h1>Portfolio</h1>
            </header>
            <section>
            <header>
                    <h2>Creative Developer</h2>
                </header>
                <article>
                    <header>
                        <h3>Binary Classification Task</h3>
                        <img src="src/assets/image03.png" alt="Photo by Christopher Gower on Unsplash" />
                    </header>
                    <p>
                        Logistic regression as a foundation for classification, by taking our probability outputs and applying 
                        a fixed threshold to them. In this project :  <a href="https://github.com/dev-JoseAlberto/Porto-Seguro-Data-Challenge" target="blank">Porto-Seguro-Data-Challenge</a>, 
                        the logistic regression is used to estimate the posterior probabilities of each class.The model must predict label that belongs to one two classes.
                        The training of a binary classifier to predict the probability of customer contract a new product.
                        The probability estimates is useful for gauging the model's confidence about the predicted classification.
                    </p>
                    <p>
                        There are many reasons to assess the probability of a state of a categorical variable, and a common application 
                        is classification predicting the class of a new data point.Many methods are available, but regression has the advantage 
                        of being relatively simple to perform and interpret. First a training set is used to develop a prediction equation, and 
                        then the predicted membership probability is thresholded to predict the class membership for new observations, with the point classified to the most probable class.
                    </p>
                </article>
            </section>
            <section>
            <article >
                <header>
                    <h3>Aircraft Maintenance</h3>
                    <img src="src/assets/image04.jpg" alt="GE Aviation" />
                </header>
                <p>
                    GE Aviation is a world-leading provider of jet and turboprop engines, as well as integrated systems for commercial, 
                    military, business and general aviation aircraft. In this project : <a href="https://github.com/dev-JoseAlberto/GE-Aviation" target="blank">GE-Aviation</a>, 
                    besides serving their allocated functions the engine systems must be designed to satisfy further objectives of the operator of the aircraft.These objectives 
                    are to provide safety and reliability, must be economically viable and competitive and meet certification requirements. These certification requirements include 
                    those for noise and pollution. Providing safety and reliability requires introducing failure management into the design of a system i.e. avoiding failures and securing 
                    continuation of a flight even when a component has failed.
                </p>
                <p> 
                    Maintenance of aircraft engines is expensive and time consuming; maintenance costs typically account for between ten and twenty per cent of aircraft-related operating costs. 
                    Hence, it is necessary to optimize maintenance, improving the competitive position. Thus, the business areas include maintenance of aircraft engines, both commercial and military.
                </p>
            </article>
            </section>
            <section>
            <article>
                <header>
                    <h3>Customer Segmentation</h3>
                    <img src="/src/assets/image05.jpeg" />
                </header>
                <p>
                    Customer segmentation is practice of diving a customer base into groups of individuals that similar in specific ways relevant marketing.
                    The marketing focus, segments have different interests, values,tastes and reasons purchase.
                    In this project : <a href="https://github.com/dev-JoseAlberto/Customer-Segmentation" target="blank">Customer-Segmentation</a>.
                    Marketing segmentation is strategy that involves dividing a broad target market into subsets of consumers who have common needs, demand and characteristics.
                    The developing a marketing strategy that targets the individuals in your chosen segment.
                </p>
            </article>
            </section>
        </motion.div>
    );
}