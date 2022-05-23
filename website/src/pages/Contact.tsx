import { motion } from "framer-motion";


export function Contact (){
    return (
        <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: 0 , transition:{ease: "easeOut", duration: 0.5} }}
        >
            <header>
                <h1>Contact</h1>
                <img className="max-w-full w-[800px] h-1/2" src="src/assets/image07.jpg" alt="" />
            </header>
            <section>
                <header>
                    <h2>Pricing Plans</h2>
                </header>
                <article>
                    <header>
                        <h3>Enterprise Solutions</h3>
                    </header>
                    <p>
                    We usually make decisions based information. As information has become more readily available via the internet and media, our desire to use this information to help us make decisions has intensified. The sites use tools that take our current information, sift through data looking for patterns that are relevant to our problem, and return answers. The process of developing these kinds of tools has evolved throughout a number of fieds such as chemistry, computer science , physics, and statistic and has been called machine learning.
                    </p>
                </article>
            </section>
        </motion.div>
    );
}