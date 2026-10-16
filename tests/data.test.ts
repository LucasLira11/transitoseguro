import { describe, expect, it } from 'vitest';
import { quizBank, QUIZ_ROUND_SIZE } from '../src/data/quiz';
import { signs } from '../src/data/signs';

describe('quizBank', () => {
  it('has enough questions for a round with variety', () => {
    expect(quizBank.length).toBeGreaterThanOrEqual(QUIZ_ROUND_SIZE * 2);
  });

  it('has unique ids', () => {
    expect(new Set(quizBank.map((q) => q.id)).size).toBe(quizBank.length);
  });

  it('points every correct index at an existing option', () => {
    for (const q of quizBank) {
      expect(q.correct, q.id).toBeGreaterThanOrEqual(0);
      expect(q.correct, q.id).toBeLessThan(q.options.length);
      expect(new Set(q.options).size, `${q.id} has duplicate options`).toBe(q.options.length);
    }
  });
});

describe('signs', () => {
  it('has unique ids', () => {
    expect(new Set(signs.map((s) => s.id)).size).toBe(signs.length);
  });
});
