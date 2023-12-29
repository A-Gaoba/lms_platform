"use client"
import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
const formSchema = z.object({
  title: z.string().min(1, {
    message: "tiitle is requeired"
  }),
})

const CeratePage = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values)
      router.push(`/teacher/courses/${response.data.id}`)
    } catch (error) {
      console.log("something went wrong")
    }
    return (
      <div className=" max-w-5xl max-auto flex md:items-center md:justify-center h-full p-6">
        <div>
          <h1 className=" text-2xl">Create a new page</h1>
          <p className="text-sm text-slate-600">what would you like to name your course?</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Course title
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder='e.g. "Advanced web development"'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This will be the visible title of your course in the course listings and search results. Keep it concise but descriptive – people should be
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />
              <div className="flex items-center gap-x-2">
                <Link href="/">
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    )
  }
}
export default CeratePage;