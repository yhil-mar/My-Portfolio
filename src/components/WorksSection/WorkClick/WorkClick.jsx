import style from './WorkClick.module.css';

const WorkClick = ({ theme, isOpen, closeWork, srcImage, workTitle, workInfo, workClient, workDate, workType, workURL }) => {

    return (
        <section className={`${style.workModalContainer} ${isOpen ? style.isOpen : ''}`} onClick={isOpen ? closeWork : undefined}>

            <section className={`${style[theme]} ${style.workClickContainer}`}>

                <span className={`${style[theme]} ${style.closeButton}`}>✖</span>

                <div className={style.imageContainer}>
                    <img className={`${style[theme]} ${style.workImage}`} src={srcImage} />
                </div>

                <h3 className={`${style[theme]} ${style.workClickTitle}`}>{workTitle}</h3>

                <span className={style.workClickInfo}>
                    {workInfo}
                </span>

                <section className={`${style[theme]} ${style.specsContainer}`}>
                    <span><b>Cliente:</b></span>
                    <span>{workClient}</span>
                    <span><b>Fecha:</b></span>
                    <span>{workDate}</span>
                    <span><b>Tipo:</b></span>
                    <span>{workType}</span>
                    <span><b>Enlace:</b></span>
                    {
                        workURL === 'En construcción...' ?
                            <span>{workURL}</span> :
                            <a href={workURL} target='_blank'>{workURL}</a>
                    }

                </section>
            </section>
        </section>
    );
};

export default WorkClick;