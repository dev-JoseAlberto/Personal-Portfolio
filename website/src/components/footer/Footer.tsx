import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import '../footer/Footer.css';

export function Footer () {
    return (
        <div>
            <footer>
                <p>&copy; 2022 by José Alberto | All Rights Reserved</p>
                <ul>
                    <li>
                        <a href="https://github.com/dev-JoseAlberto"><BsGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/josealbertocorreiasantana-a88a611a1/"><BsLinkedin /></a>
                    </li>
                </ul>
            </footer>   
        </div>
    );
}