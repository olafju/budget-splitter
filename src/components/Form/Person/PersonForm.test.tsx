import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import PersonForm from './PersonForm';


describe('PersonForm', () => {
  it('calls onAddPerson with entered name', async () => {
    const user = userEvent.setup();
    const onAddPerson = vi.fn();

    render(<PersonForm onAddPerson={onAddPerson} />);

    await user.type(screen.getByPlaceholderText("Enter person's name"), 'Olaf');

    await user.click(screen.getByRole('button', { name: 'Add person' }));

    expect(onAddPerson).toHaveBeenCalledWith('Olaf');
  });

  it('does not add person when name is empty', async () => {
    const user = userEvent.setup();
    const onAddPerson = vi.fn();

    render(<PersonForm onAddPerson={onAddPerson} />);

    await user.click(screen.getByRole('button', { name: 'Add person' }));

    expect(onAddPerson).not.toHaveBeenCalled();
  });
});