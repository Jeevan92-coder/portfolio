import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { fadeIn } from "../../variants";

const contactInfo = [
  { Icon: HiMail,           label: "Email",    value: "meherjeevan55@gmail.com" },
  { Icon: HiPhone,          label: "Phone",    value: "+91 7706893912"         },
  { Icon: HiLocationMarker, label: "Location", value: "India, Uttar Pradesh, ORAI"                   },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");
  const [formData, setFormData]   = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // EmailJS — free service, works on localhost + production
      // Setup steps (one time only):
      // 1. emailjs.com pe free account banao
      // 2. "Add New Service" → Gmail choose karo
      // 3. "Email Templates" → new template banao
      // 4. Neeche 3 values apni dalo:
      const SERVICE_ID  = "service_abc123";
      const TEMPLATE_ID = "template_h43eudn";
      const PUBLIC_KEY  = "cr6LJhqf-ngeB9GR1";

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id:     PUBLIC_KEY,
          template_params: {
            from_name:    formData.name,
            from_email:   formData.email,
            subject:      formData.subject,
            message:      formData.message,
            to_email:     "meherjeevan55@gmail.com",
          },
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Kuch gadbad hui. Dobara try karo.");
      }
    } catch (err) {
      setError("Network error. Internet check karo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col xl:flex-row gap-x-12 w-full max-w-[900px]">

          {/* ── Left — contact info ── */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex flex-col justify-center gap-y-8 xl:w-[40%]"
          >
            <h2 className="h2">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Koi project hai? Collaborate karna hai? Ya bas baat karni hai?
              Form fill karo ya directly reach karo.
            </p>

            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                  <item.Icon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">{item.label}</p>
                  <p className="text-white/80 text-sm font-light">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1"
          >
            <h2 className="h2 text-center xl:hidden mb-12">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-6 py-20"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-4xl">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
                <p className="text-white/50 text-center max-w-xs">
                  Thank you for reaching out. Main 24 hours mein reply karunga.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent text-sm underline underline-offset-4"
                >
                  Aur ek message bhejo
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-4"
                autoComplete="off"
              >
                {/* Name + Email */}
                <div className="flex gap-x-6 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Apna message likho..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea h-[180px]"
                />

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center gap-x-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white w-full h-[52px] rounded-lg"
                >
                  {isLoading ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
                  ) : (
                    <>
                      Send Message <BsArrowRight />
                    </>
                  )}
                </button>

                {/* EmailJS setup note */}
                <p className="text-white/20 text-xs text-center">
                  * EmailJS setup ke baad form live ho jayega
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;