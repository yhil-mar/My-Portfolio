import style from './AboutSection.module.css';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import LanguageContext from '../../context/LanguageContext';

// const AboutSection = () => {

//     const { theme } = useContext(ThemeContext);

//     const { texts } = useContext(LanguageContext);

//     return (
//         <section className={`${style[theme]} ${style.ASContainer}`}>
//             <section className={style.headerContainer}>
//                 <span>About me</span>
//             </section>
//             <section className={style.bodyContainer}>
//                 <section className={style.imgContainer}>
//                     <img src='/images/perfil_4.jpg' alt="" className={style.profileImg} />
//                 </section>
//                 <section className={style.textContainer}>
//                     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ex dolorem minus aut harum sint autem cum deserunt. Veritatis ad autem iste blanditiis? Ullam ratione nihil architecto, earum optio incidunt.</span>
//                 </section>
//             </section>
//         </section>
//     );
// };

const AboutSection = () => {

    const { theme } = useContext(ThemeContext);

    return (

        <section id='aboutSection' className={`${style[theme]} ${style.aboutSection}`}>

            <section className={`${style[theme]} ${style.aboutContainer}`}>

                <article className={style.aboutArticle}>
                    <h2 className={style.aboutName}>Yhilmar Sánchez</h2>
                    <h6 className={style.aboutProf}>Desarrollador Web Full Stack</h6>
                    <div className={style.aboutImgContainer}>
                        <img className={`${style[theme]} ${style.aboutImg}`} src='/images/foto_perfil.png' />
                    </div>
                    <a className={`${style[theme]} ${style.aboutButton}`} href='https://drive.google.com/file/d/18rZ0mTupLyV68AXlRV-Q2yxvUqXsYzsa/view?usp=sharing' target='_blank'>Descarga mi CV</a>
                </article>

                <article className={style.aboutArticle}>
                    <p className={style.aboutParagraph}>
                        Soy Colombiano 🇨🇴, nací en una pequeña ciudad ubicada al sur de mi país, San Juan de Pasto.
                    </p> <br />
                    <p className={style.aboutParagraph}>
                        Al terminar mis estudios secundarios mi pasión por la programación comenzó a hacerse presente.
                    </p> <br />
                    <p className={style.aboutParagraph}>
                        Estudié Ingeniería Civil, obtuve mi título profesional, y dentro de la carrera conocí sobre el mundo de la programación, conocimientos básicos pero suficientes para tener claro mi motivación de cara al futuro.
                    </p> <br />
                    <p className={style.aboutParagraph}>
                        Soy desarrollador Full Stack, me desempeño en el lado del desarrollo Front-End haciendo uso de tecnologías como JavaScript | React | redux | HTML | CSS, y en el lado del desarrollo Back-End con las tecnologías NodeJs | JavaScript | Express | PostgreSQL | Sequelize.
                    </p>
                </article>

                <article className={style.aboutArticle}>

                    <section className={style.containerS}>
                        <h3 className={style.aboutTitleSkill}>Mis Aptitudes Técnicas</h3>
                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Desarrollo Web Front-End</h6>
                                <h6 className={style.percentageTS}>70%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageDWFE}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>ReactJs</h6>
                                <h6 className={style.percentageTS}>70%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageRJS}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Diseño Web</h6>
                                <h6 className={style.percentageTS}>65%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageDW}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>CSS</h6>
                                <h6 className={style.percentageTS}>65%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageCSS}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Desarrollo Web Back-End</h6>
                                <h6 className={style.percentageTS}>70%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageDWBE}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>JavaScript</h6>
                                <h6 className={style.percentageTS}>70%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageJS}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>PHP</h6>
                                <h6 className={style.percentageTS}>60%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentagePHP}`} />
                        </section>

                    </section>

                    <section className={style.containerS}>
                        <h3 className={style.aboutTitleSkill}>Mis Aptitudes Blandas</h3>
                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Liderazgo</h6>
                                <h6 className={style.percentageTS}>70%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageL}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Trabajo en equipo</h6>
                                <h6 className={style.percentageTS}>80%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageTP}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Solución de problemas</h6>
                                <h6 className={style.percentageTS}>75%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentagePS}`} />
                        </section>

                        <section className={style.technicalSkill}>
                            <section className={style.headerContainerS}>
                                <h6 className={style.titleTS}>Adaptabilidad</h6>
                                <h6 className={style.percentageTS}>80%</h6>
                            </section>
                            <div className={`${style[theme]} ${style.totalPercentage}`} />
                            <div className={`${style[theme]} ${style.finalPercentage} ${style.percentageA}`} />
                        </section>
                    </section>

                </article>

            </section>

        </section>

    );

};
export default AboutSection;