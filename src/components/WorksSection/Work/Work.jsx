import style from './Work.module.css';

const Work = ({ theme, src }) => {

    return (
        <section className={style.workContainer}>
            <img className={`${style[theme]} ${style.workImage}`} src={src} />
        </section>
    );
};

export default Work;