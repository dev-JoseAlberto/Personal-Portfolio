 import { motion } from "framer-motion";
 
 
 export function Home (){
    return (
        <motion.div 
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: 0 , transition:{ease: "easeOut", duration: 0.5} }}
        >
            <header> 
                <img className="max-w-full h-auto mt-4 rounded-full" src="src/assets/image01.jpeg" alt="Profile" />
                <h1 className="text-4xl font-black">I'm José </h1>
            </header>
            <section>
                <header>
                    <h2 className="text-2xl font-black">I'm a Web Developer and Data Enthusiasts</h2>
                </header>
                <article>
                    <header>
                        <h3 className="text-xl font-black">I will create a website that can give value to your business.</h3>
                    </header>
                    <p>
                    I've always loved data analysis, statistics and programming skills, so I suppose it's natural that I became Data Enthusiasts.
                    I use data science combines multiple fields, including mathematics, statistics, scientific 
                    methods and data analysis, to extract value from data. Those who practice data science are called 
                    data scientists, and they combine a range of skills to analyze data collected.
                    I like to approach problems in a more agile way by having the know-how from both the data and the web development side.
                    </p>
                </article>
            </section>
        </motion.div>
        
    );
}