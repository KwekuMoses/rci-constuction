
import './ServiceCards.scss'

interface Card {
    title: string;
    text: string;
}

interface Cards {
    [key: string]: Card;
}

interface Props {
    cards: Cards;
}

const ServiceCards = ({ cards }: Props) => {

    console.log(cards)
    return (
        <div className="ServiceCards">
            <h2 className="ServiceCards__Title">Hur vi jobbar</h2>
            <div className="ServiceCards__CardWrapper">
                {Object.entries(cards).map(([key, card], index) => (
                    <div className="ServiceCards__Card" key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceCards;
