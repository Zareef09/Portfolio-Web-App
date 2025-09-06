"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getRefinedDescription } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const FormSchema = z.object({
  projectDescription: z.string().min(20, "Please provide a more detailed description (at least 20 characters)."),
});

type FormValues = z.infer<typeof FormSchema>;

interface ProjectRefinementProps {
  description: string;
  onRefine: (data: { tagline: string; summaryBullets: string[] }) => void;
}

export function ProjectRefinement({ description, onRefine }: ProjectRefinementProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectDescription: description,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const result = await getRefinedDescription({ projectDescription: data.projectDescription });
    setIsLoading(false);

    if (result.success && result.data) {
      onRefine(result.data);
      toast({
        title: "Success!",
        description: "Your project description has been refined.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  };

  return (
    <Card className="bg-card/70 border-dashed border-primary/50">
      <CardContent className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    {...field}
                    placeholder="Enter your project description..."
                    className="bg-background/50"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Refining...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
