
import './ServiceCards.scss'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';

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
    return (
        <div className="ServiceCards">
            <h2 className="ServiceCards__Title">Hur vi jobbar</h2>
            <div className="ServiceCards__CardWrapper">
                {Object.entries(cards).map(([key, card], index) => {
                    if (card.title && card.text) {
                        return (
                            <div className="ServiceCards__Card" key={index}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="ServiceCards__ButtonWrapper">
                <SecondaryButton buttonData="Se tidigare projekt" />
            </div>
        </div>
    );
}

export default ServiceCards;
