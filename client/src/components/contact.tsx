import { useState, useRef } from "react";
import { config } from "@/config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const contactFormSchema = insertContactMessageSchema.extend({
  projectType: insertContactMessageSchema.shape.projectType,
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      if (!token) {
        throw new Error("Please complete the captcha");
      }
      const response = await apiRequest("POST", `${config.apiEndpoint}/contact`, {
        ...data,
        captchaToken: token
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I will get back to you soon.",
      });
      setIsSubmitted(true);
      form.reset();
      setToken(null);
      captchaRef.current?.resetCaptcha();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2>THANK YOU!</h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Your message has been sent successfully. I will get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>GET IN TOUCH</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project
            and explore how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services */}
          <div className="space-y-8">
            <div>
              <h3>SERVICES</h3>
              <div className="space-y-2 text-accent">
                <p>• Architectural Visualization</p>
                <p>• Product Rendering & Marketing Imagery</p>
                <p>• Planning Permission Visualizations</p>
                <p>• Motion Graphics & Animation</p>
                <p>• 3D Modeling & Texturing</p>
                <p>• Concept Design Support</p>
              </div>
            </div>

            <div>
              <h3>AVAILABILITY</h3>
              <div className="space-y-2 text-accent">
                <p>Available for remote projects worldwide</p>
                <p>Accepting new commissions</p>
                <p>Flexible project timelines</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">NAME</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono"
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
                      <FormLabel className="text-sm font-medium">EMAIL</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">PROJECT TYPE</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Architectural Visualization">Architectural Visualization</SelectItem>
                          <SelectItem value="Product Rendering">Product Rendering</SelectItem>
                          <SelectItem value="Interior Design">Interior Design</SelectItem>
                          <SelectItem value="Digital Art">Digital Art</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
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
                      <FormLabel className="text-sm font-medium">MESSAGE</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center mb-4">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={config.hcaptchaSiteKey}
                    onVerify={setToken}
                    theme="light"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending || !token}
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-accent transition-colors duration-300 font-medium"
                >
                  {contactMutation.isPending ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
