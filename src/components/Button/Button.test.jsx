import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe('<Button />', () => {
    it('should render the button with text "Load more posts"', () => {
        render(<Button text="Load more posts"/>);

        const button = screen.getByRole('button', { name: /load more posts/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more posts" onClick={fn}/>)

        const button = screen.getByRole('button', { name: /load more posts/i });

        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more posts" disabled={true}/>)

        const button = screen.getByRole('button', { name: /load more posts/i });

        expect(button).toBeDisabled();
    });
});