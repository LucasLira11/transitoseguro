import { describe, expect, it } from 'vitest';
import {
  answerQuestion,
  createRound,
  getScore,
  isComplete,
  resultMessage,
  shuffle,
  type QuizQuestion,
} from '../src/lib/quiz';

/** Gerador determinístico (mulberry32) para testes reproduzíveis. */
function seeded(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const bank: QuizQuestion[] = Array.from({ length: 15 }, (_, i) => ({
  id: `q${i + 1}`,
  prompt: `Pergunta ${i + 1}`,
  options: [`certa ${i + 1}`, `errada A ${i + 1}`, `errada B ${i + 1}`, `errada C ${i + 1}`],
  correct: 0,
  explanation: `Explicação ${i + 1}`,
}));

describe('shuffle', () => {
  it('returns a permutation of the input', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const out = shuffle(input, seeded(1));
    expect(out).toHaveLength(input.length);
    expect([...out].sort()).toEqual([...input].sort());
  });

  it('does not mutate the input', () => {
    const input = [1, 2, 3, 4, 5, 6];
    shuffle(input, seeded(2));
    expect(input).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('createRound', () => {
  it('draws the requested number of distinct questions, all unanswered', () => {
    const round = createRound(bank, 10, seeded(3));
    expect(round.questions).toHaveLength(10);
    expect(new Set(round.questions.map((q) => q.id)).size).toBe(10);
    expect(round.answers).toEqual(Array(10).fill(null));
  });

  it('uses the whole bank when size exceeds it', () => {
    const round = createRound(bank, 50, seeded(4));
    expect(round.questions).toHaveLength(bank.length);
  });

  it('keeps the correct answer text after shuffling options', () => {
    const round = createRound(bank, 15, seeded(5));
    for (const q of round.questions) {
      const original = bank.find((b) => b.id === q.id)!;
      expect(q.options[q.correct]).toBe(original.options[original.correct]);
      expect([...q.options].sort()).toEqual([...original.options].sort());
    }
  });

  it('is reproducible with the same seed', () => {
    expect(createRound(bank, 10, seeded(42))).toEqual(createRound(bank, 10, seeded(42)));
  });

  it('does not mutate the bank', () => {
    const snapshot = structuredClone(bank);
    createRound(bank, 10, seeded(6));
    expect(bank).toEqual(snapshot);
  });
});

describe('answerQuestion / getScore / isComplete', () => {
  it('records the chosen option', () => {
    const round = createRound(bank, 3, seeded(7));
    const next = answerQuestion(round, 1, 2);
    expect(next.answers).toEqual([null, 2, null]);
    expect(round.answers).toEqual([null, null, null]);
  });

  it('ignores a second answer to the same question', () => {
    let round = createRound(bank, 3, seeded(8));
    const right = round.questions[0].correct;
    const wrong = (right + 1) % round.questions[0].options.length;
    round = answerQuestion(round, 0, right);
    const again = answerQuestion(round, 0, wrong);
    expect(again).toBe(round);
    expect(getScore(again)).toBe(1);
  });

  it('counts only correct answers', () => {
    let round = createRound(bank, 3, seeded(9));
    round = answerQuestion(round, 0, round.questions[0].correct);
    round = answerQuestion(round, 1, (round.questions[1].correct + 1) % 4);
    round = answerQuestion(round, 2, round.questions[2].correct);
    expect(getScore(round)).toBe(2);
  });

  it('is complete only when every question is answered', () => {
    let round = createRound(bank, 2, seeded(10));
    expect(isComplete(round)).toBe(false);
    round = answerQuestion(round, 0, 0);
    expect(isComplete(round)).toBe(false);
    round = answerQuestion(round, 1, 0);
    expect(isComplete(round)).toBe(true);
  });
});

describe('resultMessage', () => {
  it.each([
    [10, 10, 'Excelente! Você é um expert em segurança no trânsito!'],
    [8, 10, 'Muito bom! Você tem ótimos conhecimentos sobre trânsito!'],
    [6, 10, 'Bom trabalho! Continue aprendendo sobre segurança viária!'],
    [4, 10, 'Você pode melhorar! Revise as dicas de segurança!'],
    [3, 10, 'É importante estudar mais sobre segurança no trânsito!'],
    [0, 10, 'É importante estudar mais sobre segurança no trânsito!'],
  ])('%i/%i → %s', (score, total, message) => {
    expect(resultMessage(score, total)).toBe(message);
  });
});
