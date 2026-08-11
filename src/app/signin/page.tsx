"use client";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,

  TextField,

} from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgArrangeBack } from "react-icons/cg";




export default function SignInPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setIsSubmitting(true)
          const formData = new FormData(e.currentTarget)
          const user = Object.fromEntries(formData.entries() as unknown as SignUpFormValues)
          console.log(user)
  }

 

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10 text-center">
            <div
              className={`mb-5 flex items-center justify-center gap-2 transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <CgArrangeBack className="h-4 w-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                Welcome Back
              </span>
            </div>

            <h1
              className={`text-4xl font-bold uppercase  tracking-tight text-white transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Signin 
            </h1>

            <p
              className={`mt-4 text-base font-medium  text-white/60 transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Continue your journey 
            </p>
          </div>

          {/* Form */}
          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Form onSubmit={onSubmit}>
              <Fieldset className="w-full">
               

                <Fieldset.Group className="space-y-4 mt-4">
               
                  <TextField isRequired name="email" type="email">
                    <Label className="text-white font-medium">Email</Label>
                    <Input
                      placeholder="john@example.com"
                      className="rounded-2xl  w-full p-2 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                    <FieldError className="text-red-400" />
                  </TextField>

                  <TextField isRequired name="password" type="password">
                    <Label className="text-white font-medium">Password</Label>
                    <Input
                      placeholder="Password"
                      className="rounded-2xl  w-full p-2 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                    <FieldError className="text-red-400" />
                  </TextField>

                
                </Fieldset.Group>

                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  className="w-full h-10 mt-4 bg-white text-black font-bold uppercase tracking-wide rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? "Creating..." : "Signin"}
                </Button>

                <div className="mt-4">
                  <div className="relative flex items-center gap-4 py-2">
                    <div className="flex-1 border-t border-white/10" />
                    <span className="text-xs font-medium uppercase tracking-wider text-white/30">
                      Or
                    </span>
                    <div className="flex-1 border-t border-white/10" />
                  </div>

                 <span className="text-[#A9A9A9] ">New To Worksy  <Link href={'/signup'} className="font-bold text-white">Crete  an account</Link> </span>
                </div>
              </Fieldset>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
