import style from './ServicesSection.module.css';
import Service from './Service/Service';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const ServicesSection = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section id='servicesSection' className={`${style[theme]} ${style.servicesSection}`}>

            <section className={`${style[theme]} ${style.servicesContainer}`}>

                <section className={`${style[theme]} ${style.titleSection}`}>
                    <h2 className={style.title}>¿Que te ofrezco?</h2>
                </section>

                {/* Servicio Desarrollo Web Front-End */}
                <AnimatedComponent threshold={0.5}>
                    {(inView) => (
                        <Service
                            theme={theme}
                            paths={["M35.1307 6.01709H9.91477C7.92812 6.01709 6.3125 7.63271 6.3125 9.61936V16.8239H38.733V9.61936C38.733 7.63271 37.1173 6.01709 35.1307 6.01709ZM6.3125 34.8353C6.3125 36.8219 7.92812 38.4375 9.91477 38.4375H24.3239V20.4262H6.3125V34.8353ZM27.9261 38.4375H35.1307C37.1173 38.4375 38.733 36.8219 38.733 34.8353V20.4262H27.9261V38.4375Z"]}
                            serviceName='Desarrollo Web Front-End'
                            description='Desarrollo de sitios y aplicaciones para plataformas web a través del Framework ReactJs, junto con Redux y maquetación CSS.'
                            inView={inView}
                            animation='show'
                            element='first' />
                    )}
                </AnimatedComponent>

                {/* Servicio Diseño UI/UX */}
                <AnimatedComponent threshold={0.5}>
                    {(inView) => (
                        <Service
                            theme={theme}
                            paths={["M36.9317 6.01709H13.5169C11.5303 6.01709 9.91464 7.63271 9.91464 9.61936V13.2216H8.1135C6.12685 13.2216 4.51123 14.8373 4.51123 16.8239V34.8353C4.51123 36.8219 6.12685 38.4375 8.1135 38.4375H18.9203C20.907 38.4375 22.5226 36.8219 22.5226 34.8353H36.9317C38.9183 34.8353 40.534 33.2197 40.534 31.233V9.61936C40.534 7.63271 38.9183 6.01709 36.9317 6.01709ZM11.7158 16.8239H18.9203L18.9149 33.0341H8.1135V16.8239H11.7158ZM22.5226 31.233V16.8239C22.5226 14.8373 20.907 13.2216 18.9203 13.2216H13.5169V9.61936H33.3294V31.233H22.5226Z"]}
                            serviceName='Diseño UI/UX'
                            description='Diseños de experiencia e interfaz de usuario minimalistas y de fácil manejo, por medio del editor de gráficos y prototipado Figma para cualquier dispositivo.'
                            inView={inView}
                            animation='show'
                            element='second' />
                    )}
                </AnimatedComponent>

                {/* Desarrollo Web Back-End */}
                <AnimatedComponent threshold={0.5}>
                    {(inView) => (
                        <Service
                            theme={theme}
                            paths={[
                                "M37.3824 6.01709H8.56419C6.57753 6.01709 4.96191 7.63271 4.96191 9.61936V34.8353C4.96191 36.8219 6.57753 38.4375 8.56419 38.4375H37.3824C39.369 38.4375 40.9846 36.8219 40.9846 34.8353V9.61936C40.9846 7.63271 39.369 6.01709 37.3824 6.01709ZM8.56419 34.8353V13.2216H37.3824L37.386 34.8353H8.56419Z",
                                "M18.3926 17.3516L11.7158 24.0284L18.3926 30.7052L20.9394 28.1584L16.8094 24.0284L20.9394 19.8984L18.3926 17.3516ZM28.144 17.3516L25.5972 19.8984L29.7272 24.0284L25.5972 28.1584L28.144 30.7052L34.8208 24.0284L28.144 17.3516Z"]}
                            serviceName='Desarrollo Web Back-End'
                            description='Desarrollo de servidores web con los lenguajes de programación JavaScript y PHP, ajustandose a las necesidades que se requieran.'
                            inView={inView}
                            animation='show'
                            element='third' />
                    )}
                </AnimatedComponent>

                {/* Conocimiento Profesional en Cálculo Avanzado y Estadística */}
                <AnimatedComponent threshold={0.5}>
                    {(inView) => (
                        <Service
                            theme={theme}
                            paths={["M11.716 39.9885H33.3297C34.2851 39.9885 35.2013 39.609 35.8769 38.9335C36.5524 38.2579 36.932 37.3417 36.932 36.3863V7.56809C36.932 6.61271 36.5524 5.69646 35.8769 5.0209C35.2013 4.34534 34.2851 3.96582 33.3297 3.96582H11.716C10.7607 3.96582 9.84441 4.34534 9.16885 5.0209C8.49329 5.69646 8.11377 6.61271 8.11377 7.56809V36.3863C8.11377 37.3417 8.49329 38.2579 9.16885 38.9335C9.84441 39.609 10.7607 39.9885 11.716 39.9885ZM17.1195 34.5851H13.5172V30.9829H17.1195V34.5851ZM17.1195 27.3806H13.5172V23.7783H17.1195V27.3806ZM17.1195 20.176H13.5172V16.5738H17.1195V20.176ZM24.324 34.5851H20.7217V30.9829H24.324V34.5851ZM24.324 27.3806H20.7217V23.7783H24.324V27.3806ZM24.324 20.176H20.7217V16.5738H24.324V20.176ZM31.5285 34.5851H27.9263V23.7783H31.5285V34.5851ZM31.5285 20.176H27.9263V16.5738H31.5285V20.176ZM11.716 7.56809H33.3297V12.9715H11.716V7.56809Z"]}
                            serviceName='Cálculo Avanzado y Estadística'
                            description='Gracias a mi carrera de pregrado en ingeniería civil y mi experiencia en este rubro, te ofrezco conocimientos profesionales en estas importantes áreas de la ingeniería.'
                            inView={inView}
                            animation='show'
                            element='fourth' />
                    )}
                </AnimatedComponent>

            </section>

        </section>
    );
};

export default ServicesSection;