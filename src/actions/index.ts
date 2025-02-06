import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  createScore: defineAction({
    input: z.object({
      name: z.string().max(50, "För långt namn"),
      score: z.number().int("Poängen måste vara hel").gt(0, "Poängen är för låg").lte(1_000_000, "Fuskare!")
    }),
    handler: async (input, ctx) => {
      await ctx.locals.runtime.env.DB.prepare("INSERT INTO scores (name, score) VALUES (?, ?)").bind(input.name, input.score).run();
    }
  })
}