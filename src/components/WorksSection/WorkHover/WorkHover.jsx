import { useState } from 'react';
import style from './WorkHover.module.css';

const WorkHover = ({ theme, id, titleWork, workInfo }) => {

    const [showWorkHover, setShowWorkHover] = useState(false);

    const handleMouseEnter = () => {
        setShowWorkHover(true);
    };

    const handleMouseLeave = () => {
        setShowWorkHover(false);
    };


    return (
        <section id={id} className={`${style[theme]} ${style.workHoverContainer} ${showWorkHover ? style.show : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <section id={id} className={style.hoverInfoContainer}>
                <h3 id={id} className={style.hoverTitle}>{titleWork}</h3>
                <span id={id} className={style.hoverInfo}>{workInfo}</span>
            </section>
        </section>
    );
};

export default WorkHover;