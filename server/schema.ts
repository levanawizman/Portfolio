import { z } from 'zod';

export const windowKindSchema = z.enum(['markdown', 'gallery', 'html']);

export const openWindowSchema = z.object({
  title: z.string(),
  x: z.number(),
  y: z.number(),
  w: z.number(),
  h: z.number(),
  kind: windowKindSchema,
  payload: z.record(z.string(), z.any()),
});

export const updateWindowSchema = z.object({
  id: z.string(),
  x: z.number().optional(),
  y: z.number().optional(),
  w: z.number().optional(),
  h: z.number().optional(),
  payload: z.record(z.string(), z.any()).optional(),
});

export const closeWindowSchema = z.object({
  id: z.string(),
});

export const answerUserSchema = z.object({
  text: z.string(),
});

export const chatRequestSchema = z.object({
  message: z.string(),
  state: z.object({
    windows: z.array(z.any()),
    projects: z.array(z.any()),
  }),
});

export type WindowKind = z.infer<typeof windowKindSchema>;
export type OpenWindowParams = z.infer<typeof openWindowSchema>;
export type UpdateWindowParams = z.infer<typeof updateWindowSchema>;
export type CloseWindowParams = z.infer<typeof closeWindowSchema>;
export type AnswerUserParams = z.infer<typeof answerUserSchema>;
export type ChatRequest = z.infer<typeof chatRequestSchema>;

