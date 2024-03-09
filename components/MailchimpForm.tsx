"use client";

import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function MailchimpForm() {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  !url && console.error("Mailchimp URL not found");

  const {
    loading, 
    error, 
    success, 
    message, 
    handleSubmit
  } = useMailChimpForm(url!);

  const { fields, handleFieldChange } = useFormFields( {
    EMAIL: "",
  });

  const handleResult = () => {
    if (success) {
      return `bg-lime-600`;
    }
    if (error) {
      return `bg-red-500`;
    }
    if (loading) {
      return `bg-orange-500`;
    }

    return `bg-[#6B50FF]`;
  };

  const btnStatusCss = "rounded-r w-1/4 " + handleResult();

  return (
    <form className="flex flex-col" onSubmit={event => {
      event.preventDefault();
      handleSubmit(fields)
    }}>
      <div className="text-3xl lg:text-4xl font-bold col-span-2">Join our newsletter</div>
      <div className="text-lg lg:text-xl font-bold text-muted">Digital Twin</div>
      <div className="flex flex-row">
        <input 
          type="email" 
          name="" 
          id="EMAIL" 
          className="px-4 py-2 rounded-l bg-lightBg w-3/4"
          value={fields.EMAIL}
          onChange={handleFieldChange}
          placeholder="your@email.com"/>
        <button className={btnStatusCss} disabled={success || fields.EMAIL === "" ? true : false}>
          <div className="px-4 py-2 font-bold">{loading ? "JOINING" : (success ? "JOINED" : "JOIN")}</div>
        </button>
      </div>
    </form>
  )
}