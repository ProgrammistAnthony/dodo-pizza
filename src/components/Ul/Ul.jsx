import s from "./Ul.module.scss";

export const Ul = ({ arr }) => {
    return (
        <ul className={s.Ul}>
            {arr.map((el, i) => {
                if (typeof el === 'string') {
                    return <li key={i} className={s.Ul__p}><p>{el}</p></li>;
                } else {
                    const [key, text] = Object.entries(el)[0];
                    return (
                        <li key={i} className={s.Ul__link}>
                            <a href={text.url}>{text}</a>
                        </li>
                    );
                }
            })}
        </ul>
    );
};
