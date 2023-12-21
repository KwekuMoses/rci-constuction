
import React from 'react';
import { Meta, Story } from "@storybook/react";
import BookingCard from '../components/bookingcard/BookingCard';


export default {
    title: 'BookingCard',
    component: BookingCard,
} as Meta;

/* @ts-ignore */
export const Primary: Story = (args) => <BookingCard {...args} />;

Primary.args = {
    title: 'Default Title',
    text: 'Default text',
    icon: 'fa-thumbs-up',
};
