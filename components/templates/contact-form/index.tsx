import React from "react";
import { Send, Loader2 } from "lucide-react";
import { ContactFormErrors } from "./schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  formData: FormData;
  errors: ContactFormErrors;
  loading: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export const ContactForm = ({
  formData,
  errors,
  loading,
  onChange,
  onSubmit,
}: Props) => (
  <Card className="w-full lg:flex-3 flex card flex-col border gap-5 backdrop-blur-md rounded-2xl p-5">
    <form onSubmit={onSubmit} className="flex flex-col w-full gap-5 h-full">
      <div className="flex lg:flex-row flex-col justify-between gap-3">
        <div className="flex flex-col gap-3 flex-1">
          <Label htmlFor="name" className="text-secondary">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="px-5 py-5 rounded-lg text-white"
          />
          {errors.name && (
            <span className="text-red-500 text-[12px]">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Label htmlFor="email" className="text-secondary">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="px-5 py-5 rounded-lg"
          />
          {errors.email && (
            <span className="text-red-500 text-[12px]">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-3 flex-1">
        <Label htmlFor="message" className="text-secondary">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          className="min-h-44 p-4 rounded-lg resize-none"
        />
        {errors.message && (
          <span className="text-red-500 text-[12px]">{errors.message}</span>
        )}
      </div>

      {/* Button */}
      <Button
        type="submit"
        disabled={loading}
        className="flex items-center text-white justify-center gap-2 font-bold uppercase cursor-pointer p-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={20} /> Send Message
          </>
        )}
      </Button>
    </form>
  </Card>
);
