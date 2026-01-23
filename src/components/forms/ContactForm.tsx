import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="h-12 rounded-xl border-border/50 focus:border-primary bg-background/50"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="h-12 rounded-xl border-border/50 focus:border-primary bg-background/50"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 rounded-xl border-border/50 focus:border-primary bg-background/50">
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-xl bg-card border-border/50">
                  <SelectItem value="general" className="rounded-lg">General Inquiry</SelectItem>
                  <SelectItem value="product" className="rounded-lg">Product Information</SelectItem>
                  <SelectItem value="support" className="rounded-lg">Technical Support</SelectItem>
                  <SelectItem value="partnership" className="rounded-lg">Partnership Opportunity</SelectItem>
                  <SelectItem value="other" className="rounded-lg">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="rounded-xl border-border/50 focus:border-primary bg-background/50 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="btn-premium rounded-full gap-3 text-lg px-8 py-6">
          <span className="relative z-10">Send Message</span>
          <Send className="h-5 w-5 relative z-10" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
