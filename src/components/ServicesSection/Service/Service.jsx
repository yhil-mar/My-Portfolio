import style from './Service.module.css';

const Service = ({ theme, paths, serviceName, description }) => {

    return (
        <section className={`${style[theme]} ${style.serviceContainer}`}>
            <svg className={`${style[theme]} ${style.serviceIcon}`} xmlns="http://www.w3.org/2000/svg" width="2.7rem" height="2.7rem">
                {paths.map(path => {
                    return <path key={path} d={path} />
                })}
            </svg>
            <h3 className={style.serviceName}>{serviceName}</h3>
            <span className={style.serviceDescription}>{description}</span>
        </section>
    );
};

export default Service;