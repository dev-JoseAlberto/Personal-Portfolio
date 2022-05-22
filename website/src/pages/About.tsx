import { motion } from "framer-motion";


export function About () {
    return (
        <motion.div 
        initial={{ width:0 }}
        animate={{ width:"100%" }}
        exit={{ opacity: 0 , transition:{ease: "easeOut", duration: 0.5} }}
        >
            <header>
                <h1>About me</h1>
                <img className="image02" src="src/assets/image02.jpg" alt="Google Macbook Pro" />
            </header>
            <section>
                <header>
                    <h2>Advanced design features</h2>
                </header>
                <article>
                    <h3>The new standard in website design</h3>
                    <p>
                        Experience a seamless design process from concept to production with responsive CSS powered by smooth drag and drop. 
                        My goal is to build responsive websites with full breakpoint control.
                        It is the web developer’s job to take this design and develop it into a live, fully functional website. A frontend developer takes the visual design as provided by the web designer and builds it using coding languages such as HTML, CSS and JavaScript. A backend developer builds the more advanced functionality of the site, such as the checkout function on an e-commerce site.
                    </p>
                </article>
            </section>
        </motion.div>
    );
}