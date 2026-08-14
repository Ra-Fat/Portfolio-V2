"use client";

import React, { useState, useEffect } from "react";
import * as v from "valibot";
import emailjs from "@emailjs/browser";
import { SectionTitle } from "@/components/atoms/section-title";
import { ContactForm } from "@/components/templates/contact-form";
import { ContactInfo } from "@/components/templates/contact-info";
import {
  ContactSchema,
  ContactFormErrors,
} from "@/components/templates/contact-form/schema";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (!modalType) return;
    const timer = setTimeout(() => setModalType(null), 3000);
    return () => clearTimeout(timer);
  }, [modalType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = v.safeParse(ContactSchema, formData);

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key as keyof ContactFormErrors;
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      setModalType("error");
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        { ...formData, time: new Date().toLocaleString() },
        publicKey,
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setModalType("success");
        },
        () => {
          setLoading(false);
          setModalType("error");
        },
      );
  };

  return (
    <div className="w-full container">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="Contact" subtitle="Get In Touch" />
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full">
          <ContactForm
            formData={formData}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
