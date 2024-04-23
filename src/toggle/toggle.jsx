import Style from './toggle.css';

const Toggle = () => {
    // Toggle component code here
    <div className={Style.toggle}>
        <input type="checkbox" id="toggle" className={Style.toggle__input} />
        <label htmlFor="toggle" className={Style.toggle__label}></label>
    </div>;
};

export default Toggle;