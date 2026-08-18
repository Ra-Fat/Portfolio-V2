"use client";

import React, { useState, useEffect } from "react";
import * as v from "valibot";
import emailjs from "@emailjs/browser";
import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { ContactForm } from "@/components/templates/contact-form";
import { ContactInfo } from "@/components/molecules/contact-info";
import {
  ContactSchema,
  ContactFormErrors,
} from "@/components/templates/contact-form/schema";

// Stagger the form and info panel in one after another as this section
// scrolls into view.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

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
        <motion.div
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fromLeft} className="flex-2">
            <ContactForm
              formData={formData}
              errors={errors}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </motion.div>
          <motion.div variants={fromRight} className="flex-1">
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
