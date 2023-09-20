import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ className, threshold, children }) => {

    const { ref, inView } = useInView({
        threshold: threshold,
    });

    return (
        <div ref={ref} className={`${className}`}>
            {typeof children === 'function' ? children(inView) : children}
        </div>
    );
};

export default AnimatedComponent;