 import { motion } from "framer-motion";
 
 
 export function Home (){
    return (
        <motion.div 
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: 0 , transition:{ease: "easeOut", duration: 0.5} }}
        >
            <header> 
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris augue ex, placerat id accumsan et, maximus nec magna. 
                        Nunc nunc mauris, lacinia id ornare sed, congue in turpis. Phasellus nec eros sapien. 
                        Fusce venenatis congue bibendum. Donec placerat malesuada dui non feugiat. Nulla a molestie est, vel tristique massa. 
                        Nulla porta mollis dictum. Suspendisse lacus elit, vestibulum id rutrum ut, posuere non libero. Curabitur vitae dolor porta, pharetra nunc non, venenatis purus. 
                        Pellentesque congue urna vel congue pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam viverra lobortis ante. Praesent eu efficitur dolor. Etiam vehicula vel ipsum ullamcorper eleifend.
                    </p>
                </article>
            </section>
        </motion.div>
        
    );
}