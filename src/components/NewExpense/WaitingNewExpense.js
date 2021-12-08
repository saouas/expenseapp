import './WaitingNewExpense.css';
import Card from '../UI/Card';

const WaitingNewExpense = (props) =>{
    const handleNewState = () =>{
        props.onChangeOpenValue()    
    };
    return(
        <Card className="awaiting-new-expense">
            <img src={`${process.env.PUBLIC_URL}/icons/plus.png`}
                 alt="adding new expense"
                 className="awaiting-new-expense__button"
                 onClick={handleNewState}
                 />
        </Card>
    )
};

export default WaitingNewExpense;