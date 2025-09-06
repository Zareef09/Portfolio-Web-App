"use server";

import {
  refineProjectDescription,
  type ProjectDescriptionRefinementInput,
} from '@/ai/flows/project-description-refinement';

export async function getRefinedDescription(data: ProjectDescriptionRefinementInput) {
  try {
    const result = await refineProjectDescription(data);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to refine description: ${errorMessage}` };
  }
}
