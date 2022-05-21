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