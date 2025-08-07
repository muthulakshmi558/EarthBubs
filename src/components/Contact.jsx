import React from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-[Poppins]">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        Home &gt; <span className="font-semibold">Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="bg-[#A7E2F4] p-8 flex flex-col justify-between relative">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Contact Information
            </h2>
            <p className="text-white mb-8">
              Say something to start a live chat!
            </p>

            <div className="space-y-6 text-white">
              <div className="flex items-center gap-4">
                <FiPhone size={20} /> <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMail size={20} /> <span>Earthbubs@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin size={20} />{" "}
                <span>
                  No.5, 12th Main Road, Vijaya Nagar, Velacheri, Chennai - 600
                  042.
                </span>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-0 right-0 flex">
            <div className="w-32 h-32 bg-[#00B4D8] rounded-full translate-x-10 translate-y-10 opacity-70"></div>
            <div className="w-20 h-20 bg-[#A7E2F4] rounded-full translate-x-[-40px] translate-y-16 opacity-50"></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 bg-white space-y-6"
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
                className="w-full border-b-2 border-[#00B4D8] focus:outline-none p-1"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border-b-2 border-[#00B4D8] focus:outline-none p-1"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border-b-2 border-[#00B4D8] focus:outline-none p-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full border-b-2 border-[#00B4D8] focus:outline-none p-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Subject?
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["General Inquiry", "Call Request", "Complaint", "Information"].map(
                (subject) => (
                  <label key={subject} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={subject}
                      {...register("subject", {
                        required: "Please select a subject",
                      })}
                      className="accent-[#00B4D8]"
                    />
                    {subject}
                  </label>
                )
              )}
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message.."
              className="w-full border-b-2 border-[#00B4D8] focus:outline-none p-1"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-[#00B4D8] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#009bbd] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
