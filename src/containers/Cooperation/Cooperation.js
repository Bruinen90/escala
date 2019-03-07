import React, { Component } from 'react';
import styles from './Cooperation.module.css';
import SubPage from '../SubPage/SubPage';
import NarrowPage from '../NarrowPage/NarrowPage';
import { Link } from 'react-router-dom';

class Cooperation extends Component {
    constructor(props) {
        super(props);
        this.imgRefs = [];
        for(let i = 0; i<2; i++) {
            this.imgRefs.push(React.createRef())
        }
    }
    componentDidMount() {
        const allImg = this.imgRefs.map(ref => ref.current)
        const fadeIn = (e) =>{
            allImg.forEach(image => {
                if(image.getBoundingClientRect().top < window.innerHeight*0.8) {
                    image.classList.add(styles.show)
                }
            })
        }
        fadeIn();
        document.addEventListener('scroll', fadeIn);
    }
    render() {
        return (
            <SubPage
                title="O nas"
                number="04"
            >
                <NarrowPage>
                    <div className={styles.row} ref={this.imgRefs[0]}>
                        <div className={styles.imgWrapper}>
                            <div className={styles.whiteCover}></div>
                            <div className={styles.blackCover}></div>
                            <img
                                src={require(`../../img/cooperation/img_1.jpg`)}
                                alt="Współpraca"
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.header}>
                                Oferta kontraktowa
                            </h3>
                            <div>
                                Marka Escala realizuje zamówienia detaliczne i kontraktowe, zapewniając najwyższą jakość oferowanych produktów i profesjonalną obsługę każdego klienta. Oferta ekskluzywnych mebli skierowana jest zarówno do przestrzeni prywatnych, jak i użyteczności publicznej tj. prywatne rezydencje, hotele, powierzchnie recepcyjne i restauracje. Escala realizuje również zamówienia indywidualne, spełniając przy tym oczekiwania najbardziej wymagających klientów.  Ogólne warunki sprzedaży dostępne są w zakładce INFO. Dodatkowe informacje na temat warunków współpracy i oferty cenowej można uzyskać poprzez formularz kontaktowy w zakładce <Link to="/contact">KONTAKT</Link> lub pod adresem e-mail: <a href="mailto: info@escalapoland.com">info@escalapoland.com</a>.
                                <p>
                                    Zapraszamy do współpracy showroomy i salony meblowe zainteresowane ofertą ekspozycyjną.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.row} ref={this.imgRefs[1]}>
                        <div className={styles.imgWrapper}>
                            <div className={styles.whiteCover}></div>
                            <div className={styles.blackCover}></div>
                            <img
                                src={require(`../../img/cooperation/img_2.jpg`)}
                                alt="Współpraca"
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.header}>
                                Współpraca architekci, projektanci i dekoratorzy wnętrz
                            </h3>
                            <div>
                                Oferta marki Escala skierowana jest do osób realizujących projekty przestrzeni prywatnych i użyteczności publicznej. Zapraszamy do współpracy architektów, projektantów i dekoratorów wnętrz. Zapewniamy atrakcyjne warunki współpracy oraz dostęp do: katalogów, próbek materiałów, informacji technicznych oraz modeli produktów. W celu zapoznania się z warunkami współpracy i szczegółową ofertą cenową prosimy o kontakt poprzez formularz w zakładce <Link to="/contact">KONTAKT</Link> lub pod adresem e-mail: <a href="mailto: info@escalapoland.com">info@escalapoland.com</a>.
                            </div>
                        </div>
                    </div>
                </NarrowPage>
            </SubPage>
        );
    }
}
export default Cooperation;
