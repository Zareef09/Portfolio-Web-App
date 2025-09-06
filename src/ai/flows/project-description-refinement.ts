'use server';

/**
 * @fileOverview This file contains a Genkit flow for refining project descriptions using AI.
 *
 * The flow takes a project description as input and rewrites it into engaging taglines and summary bullets.
 *
 * @file Project Description Refinement Flow
 * @exports {
 *   refineProjectDescription,
 *   ProjectDescriptionRefinementInput,
 *   ProjectDescriptionRefinementOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectDescriptionRefinementInputSchema = z.object({
  projectDescription: z.string().describe('The original project description to be refined.'),
});

export type ProjectDescriptionRefinementInput = z.infer<
  typeof ProjectDescriptionRefinementInputSchema
>;

const ProjectDescriptionRefinementOutputSchema = z.object({
  tagline: z.string().describe('An engaging tagline for the project.'),
  summaryBullets: z
    .array(z.string())
    .describe('A list of summary bullet points for the project.'),
});

export type ProjectDescriptionRefinementOutput = z.infer<
  typeof ProjectDescriptionRefinementOutputSchema
>;

export async function refineProjectDescription(
  input: ProjectDescriptionRefinementInput
): Promise<ProjectDescriptionRefinementOutput> {
  return refineProjectDescriptionFlow(input);
}

const refineProjectDescriptionPrompt = ai.definePrompt({
  name: 'refineProjectDescriptionPrompt',
  input: {schema: ProjectDescriptionRefinementInputSchema},
  output: {schema: ProjectDescriptionRefinementOutputSchema},
  prompt: `You are an expert marketing assistant skilled at rewriting project descriptions to be more appealing to employers.

  Rewrite the following project description into an engaging tagline and a list of 3-5 summary bullet points.

  Project Description: {{{projectDescription}}}

  Tagline:
  Summary Bullets:`, // Ensure proper formatting for the output
});

const refineProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'refineProjectDescriptionFlow',
    inputSchema: ProjectDescriptionRefinementInputSchema,
    outputSchema: ProjectDescriptionRefinementOutputSchema,
  },
  async input => {
    const {output} = await refineProjectDescriptionPrompt(input);
    return output!;
  }
);
