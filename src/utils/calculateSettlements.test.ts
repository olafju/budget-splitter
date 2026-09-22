import { describe, expect, it } from 'vitest';
import { calculateSettlements } from './calculateSettlements';

describe('calculateSettlements', () => {
  it('calculates settlement when one person paid for both', () => {
    const people = [
      { id: '1', name: 'Olaf' },
      { id: '2', name: 'Kuba' },
    ];

    const expenses = [
      {
        id: '1',
        description: 'Pizza',
        amount: 100,
        paidById: '1',
      },
    ];

    const result = calculateSettlements(people, expenses);

    expect(result).toEqual([
      {
        from: 'Kuba',
        to: 'Olaf',
        amount: 50,
      },
    ]);
  });

  it('returns no settlements when everyone paid equally', () => {
    const people = [
      { id: '1', name: 'Olaf' },
      { id: '2', name: 'Kuba' },
    ];

    const expenses = [
      {
        id: '1',
        description: 'Pizza',
        amount: 50,
        paidById: '1',
      },
      {
        id: '2',
        description: 'Drinks',
        amount: 50,
        paidById: '2',
      },
    ];

    const result = calculateSettlements(people, expenses);

    expect(result).toEqual([]);
  });

  it('splits expense correctly between three people', () => {
    const people = [
      { id: '1', name: 'Olaf' },
      { id: '2', name: 'Kuba' },
      { id: '3', name: 'Bartek' },
    ];

    const expenses = [
      {
        id: '1',
        description: 'Dinner',
        amount: 120,
        paidById: '1',
      },
    ];

    const result = calculateSettlements(people, expenses);

    expect(result).toEqual([
      {
        from: 'Kuba',
        to: 'Olaf',
        amount: 40,
      },
      {
        from: 'Bartek',
        to: 'Olaf',
        amount: 40,
      },
    ]);
  });
});
