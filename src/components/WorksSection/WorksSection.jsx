import style from './WorksSection.module.css';
import Work from './Work/Work';
import WorkHover from './WorkHover/WorkHover';
import { useState, useContext } from 'react';
import WorkClick from './WorkClick/WorkClick';
import ThemeContext from '../../context/ThemeContext';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const WorkSection = () => {

    const { theme } = useContext(ThemeContext);

    const typeWorks = {
        paisesWork: {
            workTitle: 'Países',
            workInfo: 'Aplicación web con temática de países y sus actividades turísticas, el cual integra cuatro páginas. La app fue realizada con las tecnologías React | redux | HTML | CSS en el lado del Front-End, y Express | PostgreSQL | Sequelize en el lado del Back-End.',
            workClient: 'Henry',
            workDate: '31/05/2023',
            workType: 'Sitio Educativo',
            workURL: 'https://deploy-countries-eight.vercel.app/',
            workImage: "/images/countries_project_1.PNG"
        },
        rickAndMortyWork: {
            workTitle: 'Rick and Morty',
            workInfo: 'Sitio Web con temática de la serie de televisión Rick and Morty, la cual permite buscar cualquier personaje de la serie y guardar tus favoritos. La app fue realizada con React, redux y CSS puro en el lado del Front-End, y Express, PostgreSQL y Sequelize en el lado del Back-End.',
            workClient: 'Henry',
            workDate: '23/04/2023',
            workType: 'Wiki',
            workURL: 'https://p-rick-and-morty.vercel.app/',
            workImage: "/images/rickandmorty_project_1.png"
        },
        portfolioWork: {
            workTitle: 'Portfolio de YASC',
            workInfo: 'Este sitio web 🔥. Desarrollado con JavaScript y React en conjunto con Vite | Maquetado con CSS puro y mucho cariño ♥️ | Diseño UI / UX realizado en Figma.',
            workClient: 'Propio',
            workDate: '23/08/2023',
            workType: 'Porfolios y conexión profesional',
            workURL: 'https://my-portfolio-yhil-mar.vercel.app/',
            workImage: "/images/portfolio_project_1.PNG"
        }

    }

    const [isWorkOpen, setIsWorkOpen] = useState(false);

    const [workSelected, setWorkSelected] = useState({});

    const openWork = (event) => {
        for (const work in typeWorks) {
            if (work === event.target.id) {
                setWorkSelected(typeWorks[work]);
            };
        };
        setIsWorkOpen(true);
    };

    const closeWork = () => {
        setIsWorkOpen(false);
        // setWorkSelected({});
    };

    const [changeMessage, setChangeMessage] = useState(false);

    const handleClick = () => {
        setChangeMessage(!changeMessage);
    };

    return (
        <section id='worksSection' className={`${style[theme]} ${style.worksSection}`}>

            <section className={`${style[theme]} ${style.worksContainer}`}>

                <section className={`${style[theme]} ${style.titleSection}`}>
                    <h2 className={style.title}>Mis Trabajos</h2>
                </section>

                <AnimatedComponent threshold={0.25}>
                    {(inView) => (
                        <section className={`${style.work} ${inView ? style.unset : ''}`} onClick={!isWorkOpen ? openWork : undefined} data-animation='right' element-animated='firstWork'>
                            <Work theme={theme} src={typeWorks.paisesWork.workImage} />
                            <WorkHover theme={theme} id='paisesWork' titleWork={typeWorks.paisesWork.workTitle} workInfo={typeWorks.paisesWork.workInfo} />
                        </section>
                    )}
                </AnimatedComponent>

                <AnimatedComponent threshold={0.25}>
                    {(inView) => (
                        <section className={`${style.work} ${inView ? style.unset : ''}`} onClick={!isWorkOpen ? openWork : undefined} data-animation='right' element-animated='secondWork'>
                            <Work theme={theme} src={typeWorks.rickAndMortyWork.workImage} />
                            <WorkHover theme={theme} id='rickAndMortyWork' titleWork={typeWorks.rickAndMortyWork.workTitle} workInfo={typeWorks.rickAndMortyWork.workInfo} />
                        </section>
                    )}
                </AnimatedComponent>

                <AnimatedComponent threshold={0.25}>
                    {(inView) => (
                        <section className={`${style.work} ${inView ? style.unset : ''}`} onClick={!isWorkOpen ? openWork : undefined} data-animation='right' element-animated='thirdWork'>
                            <Work theme={theme} src={typeWorks.portfolioWork.workImage} />
                            <WorkHover theme={theme} id='portfolioWork' titleWork={typeWorks.portfolioWork.workTitle} workInfo={typeWorks.portfolioWork.workInfo} />
                        </section>
                    )}
                </AnimatedComponent>

                <AnimatedComponent threshold={0.25} className={style.messageContainer}>
                    {(inView) => (
                        <section className={`${style.messageContainer} ${inView ? style.unset : ''}`} data-animation='right' element-animated='fourthWork'>
                            <h4 className={`${style.message} ${!changeMessage ? style.isVisible : ''}`} onClick={handleClick}>
                                Lo sé, lo sé.
                                <br />
                                Estamos trabajando en ello...
                            </h4>

                            <h4 className={`${style.message} ${style.message2} ${changeMessage ? style.isVisible : ''}`} onClick={handleClick}>
                                2 ထ 1
                            </h4>
                        </section>
                    )}
                </AnimatedComponent>

                <WorkClick
                    theme={theme}
                    isOpen={isWorkOpen}
                    closeWork={closeWork}
                    srcImage={workSelected.workImage}
                    workTitle={workSelected.workTitle}
                    workInfo={workSelected.workInfo}
                    workClient={workSelected.workClient}
                    workDate={workSelected.workDate}
                    workType={workSelected.workType}
                    workURL={workSelected.workURL} />

            </section>

        </section>

    );
};

export default WorkSection;
