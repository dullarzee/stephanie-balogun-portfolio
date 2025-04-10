"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Instagram,
    Youtube,
    MapPin,
    Clock,
    Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [notify, setNotify] = useState("not notifying");

    //had to refactor input event handlers so as to ensure type checking
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            subject: e.target.value,
        });
    };
    const handleChange3 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            message: e.target.value,
        });
    };

    const sendEmail = async () => {
        //initializing my emailjs public key/API key
        emailjs.init("TPxhQrfopzurp7Isq");

        //sending four parameters namely: service Id from emailjs, template Id from emailjs,
        //formdata and emailjs public key/API key
        try {
            const response = await emailjs.send(
                "service_it769k8",
                "template_h0wx2fl",
                formData,
                "TPxhQrfopzurp7Isq"
            );
            console.log("email sent succesfully", response);
            setNotify("notify success");
            setTimeout(() => {
                setNotify("not notifying");
            }, 5000);
        } catch (error) {
            console.error("email no send successfully", error);
            setNotify("notify failure");
            setTimeout(() => {
                setNotify("not notifying");
            }, 5000);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        //calling function to use emailjs
        sendEmail();

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 overflow-hidden">
                {/* Gradient Effects */}
                <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Ready to elevate your project with professional
                            color grading? I'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-white/70"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-turquoise text-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm text-white/70"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-turquoise text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="project"
                                        className="text-sm text-white/70"
                                    >
                                        Project Type
                                    </label>
                                    <select
                                        id="project"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange2}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-turquoise text-white"
                                    >
                                        <option value="" className="bg-black">
                                            Select project type
                                        </option>
                                        <option
                                            value="feature film"
                                            className="bg-black"
                                        >
                                            Feature Film
                                        </option>
                                        <option
                                            value="short film"
                                            className="bg-black"
                                        >
                                            Short Film
                                        </option>
                                        <option
                                            value="commercial"
                                            className="bg-black"
                                        >
                                            Commercial
                                        </option>
                                        <option
                                            value="music video"
                                            className="bg-black"
                                        >
                                            Music Video
                                        </option>
                                        <option
                                            value="other things"
                                            className="bg-black"
                                        >
                                            Others
                                        </option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm text-white/70"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange3}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-turquoise text-white"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-turquoise text-black py-3 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center ${
                                        isSubmitting
                                            ? "bg-gray-300 text-gray-500"
                                            : ""
                                    }`}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <h2 className="font-serif text-2xl text-turquoise">
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.6 + index * 0.1,
                                            }}
                                            className="flex items-center space-x-4"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/50">
                                                    {item.label}
                                                </p>
                                                <p className="text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-serif text-2xl text-turquoise">
                                    Office Hours
                                </h2>
                                <div className="space-y-2 text-white/70">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: By appointment only</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                                <h3 className="font-serif text-xl mb-4">
                                    Quick Response Guarantee
                                </h3>
                                <p className="text-white/70">
                                    I aim to respond to all inquiries within 24
                                    hours during business days. For urgent
                                    matters, please indicate in your message.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/*drop-in success notification*/}
                {notify === "notify success" && (
                    <div className="fixed top-[-6rem] dropInAnimation left-0 w-full h-[8rem] px-[35%] z-50">
                        <div
                            className="w-full rounded-lg py-[1.5rem]
                    bg-gradient-to-l from-gray-900 to-gray-700 text-center"
                        >
                            <span className="text-white">
                                Message sent successfully!
                            </span>
                        </div>
                    </div>
                )}
                {notify === "notify failure" && (
                    <div className="fixed top-[-6rem] dropInAnimation left-0 w-full h-[8rem] px-[35%] z-50">
                        <div
                            className="w-full rounded-lg py-[1.5rem]
                    bg-gradient-to-l from-gray-900 to-gray-700 text-center"
                        >
                            <span className="text-red-500">
                                Message not sent!
                            </span>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

const contactInfo = [
    {
        icon: <Mail className="h-5 w-5 text-turquoise" />,
        label: "Email",
        value: "createwithstephaniebalogun@gmail.com",
    },
    {
        icon: <Phone className="h-5 w-5 text-turquoise" />,
        label: "Phone",
        value: "+1 (555) 123-4567",
    },
    {
        icon: <MapPin className="h-5 w-5 text-turquoise" />,
        label: "Location",
        value: "Los Angeles, CA",
    },
    {
        icon: <Clock className="h-5 w-5 text-turquoise" />,
        label: "Response Time",
        value: "Within 24 hours",
    },
];
