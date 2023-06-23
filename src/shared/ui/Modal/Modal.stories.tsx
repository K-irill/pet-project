import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalOpen: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam culpa distinctio eaque esse ex expedita fugiat id illum incidunt inventore ipsum itaque natus nemo quae, quas rem repudiandae voluptatem!',
    },
};

export const ModalOpenDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam culpa distinctio eaque esse ex expedita fugiat id illum incidunt inventore ipsum itaque natus nemo quae, quas rem repudiandae voluptatem!',
    },
};

ModalOpenDark.decorators = [ThemeDecorator(Theme.DARK)];
