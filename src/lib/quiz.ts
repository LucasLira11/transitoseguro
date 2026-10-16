/**
 * Lógica pura do quiz — sem DOM, para poder ser testada.
 * O componente Quiz.astro monta a interface em cima destas funções.
 */

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  /** Índice da opção correta em `options`. */
  correct: number;
  explanation: string;
}

export interface Round {
  questions: QuizQuestion[];
  /** Índice escolhido por questão, ou `null` se ainda não respondida. */
  answers: (number | null)[];
}

export type Rng = () => number;

/** Fisher–Yates sem mutar a entrada. */
export function shuffle<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Sorteia `size` perguntas do banco e embaralha as opções de cada uma. */
export function createRound(bank: readonly QuizQuestion[], size: number, rng: Rng = Math.random): Round {
  const questions = shuffle(bank, rng)
    .slice(0, size)
    .map((q) => {
      const order = shuffle(q.options.map((_, i) => i), rng);
      return {
        ...q,
        options: order.map((i) => q.options[i]),
        correct: order.indexOf(q.correct),
      };
    });
  return { questions, answers: questions.map(() => null) };
}

/** Registra a resposta; uma questão já respondida não muda. */
export function answerQuestion(round: Round, index: number, choice: number): Round {
  if (round.answers[index] !== null) return round;
  const answers = [...round.answers];
  answers[index] = choice;
  return { ...round, answers };
}

export function getScore(round: Round): number {
  return round.answers.filter((a, i) => a === round.questions[i].correct).length;
}

export function isComplete(round: Round): boolean {
  return round.answers.every((a) => a !== null);
}

/** Mesmas faixas de mensagem do site original. */
export function resultMessage(score: number, total: number): string {
  const pct = total === 0 ? 0 : (score / total) * 100;
  if (pct === 100) return 'Excelente! Você é um expert em segurança no trânsito!';
  if (pct >= 80) return 'Muito bom! Você tem ótimos conhecimentos sobre trânsito!';
  if (pct >= 60) return 'Bom trabalho! Continue aprendendo sobre segurança viária!';
  if (pct >= 40) return 'Você pode melhorar! Revise as dicas de segurança!';
  return 'É importante estudar mais sobre segurança no trânsito!';
}
