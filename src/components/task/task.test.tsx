import { render, screen, fireEvent } from '../setup/test-render';
import { Task } from './task.component';

describe("<Task/>", () => {
    it('should have a name', () => {
        const name = 'penguin'
        render(<Task name={name} id='44' onPress={() => { }}></Task>)

        screen.getAllByText(name);

    })

    it('should be pressable', () => {
        const name = 'penguin'
        const onSubmit = jest.fn();
        render(<Task name={name} onPress={onSubmit} id='44'></Task>)

        fireEvent.press(screen.getByRole('button'))

        expect(onSubmit).toHaveBeenCalled()
    })
})