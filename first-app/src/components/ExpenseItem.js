import './ExpenseItem.css';

export default function ExpenseItem(props) {
    const { title, amount, date } = props;
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.toLocaleString('en-us', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>

            </div>
            <div className='expense-item__description'>
                <h2 >{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
};