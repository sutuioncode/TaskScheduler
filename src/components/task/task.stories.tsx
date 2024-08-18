import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Task } from './task.component';

const MyTaskMeta: Meta<typeof Task> = {
  title: 'Task',
  component: Task,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    name: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyTaskMeta;

export const Basic: StoryObj<typeof Task> = {};

export const AnotherTaskExample: StoryObj<typeof Task> = {
  args: {
    name: 'Another example',
  },
};
