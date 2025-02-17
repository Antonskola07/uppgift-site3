import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { allowedGames } from 'src/data/games';

export const server = {
  createScore: defineAction({
    input: z.object({
      name: z.string().max(50, "För långt namn"),
      score: z.number().int("Poängen måste vara hel").gt(0, "Poängen är för låg").lte(1_000_000, "Fuskare!"),
      game: z.enum(allowedGames)
    }),
    handler: async (input, ctx) => {
      await ctx.locals.runtime.env.DB.prepare("INSERT INTO scores (name, score, game) VALUES (?, ?, ?)").bind(input.name, input.score, input.game).run();
    }
  })
}