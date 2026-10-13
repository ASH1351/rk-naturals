import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Contact: React.FC = () => {
  const { showToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Self-Care Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast({
        title: 'Please fill required fields',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast({
        title: 'Message sent successfully',
        message: 'Our botanical team will respond within 24 business hours.',
        type: 'success',
      });
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General Self-Care Inquiry',
        message: '',
      });
    }, 1200);
  };

  const quickFaqs = [
    {
      q: 'How long do your handmade botanical products stay fresh?',
      a: 'Because our formulations utilize natural plant extracts and unrefined cold-pressed seed oils, we recommend enjoying them within 12 months from their batch date (6 months after opening). Store bottles in a cool spot away from direct sunlight.',
    },
    {
      q: 'Are your formulations tested for safety?',
      a: 'Yes, each recipe is developed according to safe cosmetic formulating standards, verified for shelf stability, pH-balanced, and quality-inspected batch by batch. We never perform animal testing.',
    },
    {
      q: 'When will my order ship across India?',
      a: 'We pack and dispatch freshly made batches within 24 to 48 business hours. Standard delivery typically takes 3 to 5 business days depending on your PIN code.',
    },
    {
      q: 'Can I request customized gift hampers for weddings or corporate events?',
      a: 'Yes! We love crafting custom keepsake hampers with personalized botanical messages. Please select "Gifting & Custom Hampers" in the contact form or email our team.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202820] font-normal">
          Contact RK Naturals
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
          Have a question about our botanical ingredients, need a personal ritual recommendation, or want to track an active order? We are here to help.
        </p>
      </div>

      {/* Main Grid: Form + Info cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E4E8DF] shadow-xs space-y-6">
          <h3 className="font-serif text-2xl text-[#202820]">
            Send Us a Message
          </h3>

          {isSubmitted ? (
            <div className="p-8 text-center bg-[#E8F0E3] rounded-2xl border border-[#15952F]/30 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#15952F] mx-auto" />
              <h4 className="font-serif text-xl text-[#202820]">Thank you for reaching out!</h4>
              <p className="text-xs text-[#253D2A] max-w-sm mx-auto">
                We have received your message. Our botanical customer care team will reply via email within 24 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-[#15952F] text-white text-xs font-semibold rounded-full"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. radhika@example.com"
                    className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                  >
                    <option value="General Self-Care Inquiry">General Self-Care Inquiry</option>
                    <option value="Order Status & Delivery">Order Status & Delivery</option>
                    <option value="Botanical Ingredient Question">Botanical Ingredient Question</option>
                    <option value="Gifting & Custom Hampers">Gifting & Custom Hampers</option>
                    <option value="Wholesale & Artisan Collaboration">Wholesale & Artisan Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  How can we help you? *
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you're looking for or share your order inquiry..."
                  className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Note...' : 'Send Message to Team'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Customer Care info & Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF9F4] p-6 rounded-3xl border border-[#E4E8DF] space-y-5">
            <h4 className="font-serif text-xl text-[#202820]">
              Customer Care & Workshop
            </h4>

            <div className="space-y-4 text-xs text-[#777D73]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#15952F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202820] block">Care Hours:</strong>
                  <span>Monday to Saturday: 10:00 AM – 6:00 PM IST</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#15952F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202820] block">Electronic Mail:</strong>
                  <span>care@rknaturals.in</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#15952F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202820] block">Customer Support Helpline:</strong>
                  <span>+91 (0) 80 4920 1832</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#15952F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202820] block">Artisan Workshop:</strong>
                  <span>RK Naturals Botanical Studio, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E4E8DF] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15952F]">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Ritual Guidance</span>
            </div>
            <p className="text-xs text-[#777D73] leading-relaxed">
              Unsure which cold-pressed elixir suits your skin during monsoon or winter? Drop us a note with your daily skin routine and our artisans will recommend the right formulation.
            </p>
          </div>
        </div>

      </div>

      {/* Integrated FAQ Accordion */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E4E8DF] space-y-6">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            Common Inquiries
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#202820] mt-1">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="divide-y divide-[#E4E8DF]">
          {quickFaqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#202820]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    openFaqIndex === index ? 'rotate-180 text-[#15952F]' : ''
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <p className="text-xs sm:text-sm text-[#777D73] mt-2.5 leading-relaxed pr-6">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
