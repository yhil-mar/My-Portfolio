import style from './Contact.module.css';

const Contact = ({ theme, paths, viewBox, typeContact, info, href }) => {

    let iconsCounter = -1;

    return (
        <section className={`${style[theme]} ${style.contactContainer}`}>
            <svg className={`${style[theme]} ${style.contactIcon}`} xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox={viewBox}>
                {paths.map(path => {
                    return <path key={path} d={path} />
                })}
            </svg>
            <h3 className={style.typeContact}>{typeContact}</h3>

            {
                typeof info === 'string' ?
                    <a className={`${style[theme]} ${style.contactInfo}`} href={href} target='_blank'>{info}</a> :
                    <section className={style.iconsContainer}>
                        {info[0].map(path => {
                            iconsCounter++;
                            return <a key={path} className={`${style[theme]} ${style.contactInfo}`} href={href[iconsCounter]} target='_blank'>
                                <svg className={`${style[theme]} ${style.icon}`} xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox={info[1]}>
                                    <path d={path} />
                                </svg>
                            </a>
                        })}
                    </section>
            }

        </section>
    );
};

export default Contact;