import React from 'react';
import './BookingCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar, faBuildingLock, faUserShield, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconName = string;

const iconMapping: { [key in IconName]: IconDefinition } = {
    'fa-thumbs-up': faThumbsUp,
    'fa-building-lock': faBuildingLock,
    'fa-user-shield': faUserShield,
    'fa-users-line': faUsersLine,
};

export interface Props {
    title: string | null;
    text: string | null;
    icon: string | boolean;
}

const BookingCard = ({ title, text, icon }: Props) => {
    let faIcon: IconDefinition = faStar; // Default icon

    if (typeof icon === 'string') {
        const iconName = icon.split(' ').pop();
        if (iconName && iconName in iconMapping) {
            faIcon = iconMapping[iconName as IconName];
        }
    }

    //Note: Icons need a solution later. font awesome is not exposed in WpGrahpQL. Remove or Fix.

    return (
        <div className="BookingCard">
            <div className="BookingCard__IconWrapper">
                <div className="BookingCard__Icon">
                    <FontAwesomeIcon icon={faIcon} />
                </div>
            </div>
            {title && <h3 className={"BookingCard__Title"}>{title}</h3>}
            <p className={"BookingCard__Text"}>{text}</p>
        </div>
    );
}

export default BookingCard;


